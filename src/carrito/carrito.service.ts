import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarritoMapper } from './mapper/carrito.mapper';

import { ContactoDto } from 'src/contacto/dto/contacto.dto';
import { Contacto } from 'src/contacto/entity/contacto.entity';
import { ContactoMapper } from 'src/contacto/mapper/contacto.mapper';
import { Direccion } from 'src/direccion/entity/direccion.entity';
import { DireccionMapper } from 'src/direccion/mapper/direccion.mapper';
import { Producto } from 'src/productos/entity/producto.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { CarritoDto } from './dto/carrito.dto';
import { CreateVentaDto } from './dto/create-venta.dto';
import { Carrito } from './entity/carrito.entity';
import { Venta } from './entity/venta.entity';
import { VentaMapper } from './mapper/venta.mapper';

@Injectable()
export class CarritoService {
  private readonly logger = new Logger(CarritoService.name);
  constructor(
    @InjectRepository(Carrito)
    private carritoRepository: Repository<Carrito>,
    private abilityFactory: AbilityFactory,
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Contacto)
    private contactoRepository: Repository<Contacto>,
    @InjectRepository(Direccion)
    private direccionRepository: Repository<Direccion>,
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async getAllCarritos(): Promise<CarritoDto[]> {
    const resultado: Carrito[] = await this.carritoRepository.find();
    return CarritoMapper.toDtoList(resultado);
  }

  async getCarritoById(id: number, user: Usuario): Promise<CarritoDto> {
    this.logger.debug('Buscando carrito por su ID');
    const resultado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        contacto: true,
      },
    });
    const fullUser = await this.getFullUser(user);

    if (!resultado) {
      this.logger.fatal('no se encontro el carrito');
      throw new NotFoundException();
    }
    this.logger.log('carrito encontrado');
    this.abilityFactory.checkAbility(fullUser, Action.Read, resultado.contacto);
    return CarritoMapper.toDto(resultado);
  }

  /*async create(createCarritoDto: CreateCarritoDto): Promise<CarritoDto> {
    this.logger.log('creando carrito en la BD');
    const entidad: Carrito = CarritoMapper.toEntity(createCarritoDto);
    this.logger.log('guardando carrito en la BD');
    const resultado: Carrito = await this.carritoRepository.save(entidad);

    return CarritoMapper.toDto(resultado);
  }
  */
  async remove(id: number): Promise<CarritoDto> {
    // siento que no deberia poder borrarse nunca una venta(voucher?) por ende el carrito no deberia nunca desaparecer en caso de que el comprador quiera ver su historial de compra en algun momento de su vidaxd
    this.logger.debug('buscando carrito para eliminar');

    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      this.logger.error('no se encontro el carrito');

      throw Error();
    }

    this.logger.log('carrito eliminado de la BD');
    await this.carritoRepository.remove(encontrado);

    return CarritoMapper.toDto(encontrado);
  }

  /*async update(
    id: number,
    updateCarritoDto: UpdateCarritoDto,
    user: Usuario,
  ): Promise<CarritoDto> {
    this.logger.log('buscando carrito por ID');

    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      this.logger.log('no se encontro el carrito por su ID');

      throw Error();
    }
    this.logger.log('verificando las habilidades del usuario');

    this.abilityFactory.checkAbility(user, Action.Update, encontrado);

    if (updateCarritoDto.estado) {
      encontrado.estado = updateCarritoDto.estado;
    }
    if (updateCarritoDto.venta_id) {
      encontrado.venta_id = updateCarritoDto.venta_id;
    }
    if (updateCarritoDto.contacto_id) {
      encontrado.contacto_id = updateCarritoDto.contacto_id;
    }

    const resultado: Carrito = await this.carritoRepository.save(encontrado);
    return CarritoMapper.toDto(resultado);
  }
  */

  async getCarritoContactoById(
    id: number,
    user: Usuario,
  ): Promise<ContactoDto> {
    this.logger.debug(
      'buscando que el carrito sea creado por su mismo contacto',
    );

    const resultado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        contacto: true,
      },
    });

    if (!resultado) {
      this.logger.fatal('no coinciden o no existe el carrito con ese contacto');
      throw new BadRequestException();
    }
    this.logger.debug('verificando que el carrito sea de su contacto ');
    const fullUser = await this.getFullUser(user);
    this.abilityFactory.checkAbility(fullUser, Action.Read, resultado.contacto); // en caso de que se revise que el usuario modifique su carrito o quiera verlo, se debe crear la funcion dentro del service, por que primero se revisa si esta en la BD
    this.logger.log('mostrando el carrito ');

    return ContactoMapper.toDto(resultado.contacto);
  }

  async createVenta(
    createVentaDto: CreateVentaDto,
    user: Usuario,
  ): Promise<number> {
    let newDireccion: Direccion;
    let newContacto: Contacto;
    let newCarrito: Carrito;
    try {
      const direccion = {
        direccion: createVentaDto.contacto.calle_numero,
        depto_casa: createVentaDto.contacto.depto_casa,
        comuna_id: createVentaDto.contacto.comuna_id,
      };
      this.logger.debug('se crea direccion ');
      const entity = DireccionMapper.toEntity(direccion);
      newDireccion = await this.direccionRepository.save(entity);
    } catch (error) {
      this.logger.fatal('no se pudo crear la direccion');

      throw new BadRequestException();
    }

    try {
      const apellidos = createVentaDto.contacto.apellidos.split(' ');

      const contacto = {
        direccion_id: newDireccion.id,
        rut: createVentaDto.contacto.rut,
        nombre: createVentaDto.contacto.nombres,
        is_novedades: createVentaDto.contacto.is_novedades,
        email: createVentaDto.contacto.email,
        telefono: createVentaDto.contacto.telefono,
        usuario_id: user ? user.id : null, // en caso de venir un usuario, se le asigna al contacto y si no, null // le pondra el ['CURRENT_USER'] al usuario que creo en la BD
        apellido_paterno: apellidos ? apellidos[0] : '', // si no viene deja los espacios en blanco
        apellido_materno: apellidos ? apellidos[1] : '', // same
      };
      this.logger.debug('creando contacto');

      const entity = ContactoMapper.toEntityCarrito(contacto);

      newContacto = await this.contactoRepository.save(entity);
    } catch (error) {
      this.logger.log('no se pudo crear el contacto');
      throw new BadRequestException(error);
    }
    try {
      createVentaDto.productos.map(async ({ id, cantidad }) => {
        this.logger.debug(
          'buscando producto por su ID y descontandolo del stock',
        );

        const buscarProducto = await this.productoRepository.findOne({
          where: {
            id,
          },
        });

        buscarProducto.stock -= cantidad;
        await this.productoRepository.save(buscarProducto);
      });
    } catch (error) {
      this.logger.log('no se encontro el producto');

      throw new BadRequestException();
    }

    const entidad: Venta = VentaMapper.toEntity(createVentaDto);

    const resultado: Venta = await this.ventaRepository.save(entidad);

    try {
      const carrito = {
        contacto_id: newContacto.id,
        venta_id: resultado.id,
        estado: 'activo',
      };
      this.logger.debug('creando el nuevo carrito en la BD');

      const entity = CarritoMapper.toEntity(carrito);
      newCarrito = await this.carritoRepository.save(entity);
    } catch (error) {
      this.logger.fatal('no se pudo crear el carrito');

      throw new BadRequestException();
    }

    return newCarrito.id;
  }

  async getFullUser(user: any) {
    // busca el usuario en la BD con la relacion de su contacto
    const resultado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: user.id,
      },
      relations: {
        contacto: true,
      },
    });
    if (!resultado || !resultado.contacto) {
      this.logger.error('no se encontro un usuario o un contacto');
      throw new BadRequestException();
    }
    return resultado;
  }
}
