import { BadRequestException, Injectable } from '@nestjs/common';

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
import { CreateCarritoDto } from './dto/carrito-create.dto';
import { UpdateCarritoDto } from './dto/carrito-update.dto';
import { CarritoDto } from './dto/carrito.dto';
import { CreateVentaDto } from './dto/create-venta.dto';
import { Carrito } from './entity/carrito.entity';
import { Venta } from './entity/venta.entity';
import { VentaMapper } from './mapper/venta.mapper';

@Injectable()
export class CarritoService {
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
  ) {}

  async getAllCarritos(): Promise<CarritoDto[]> {
    const resultado: Carrito[] = await this.carritoRepository.find();

    return CarritoMapper.toDtoList(resultado);
  }

  async getCarritoById(id: number): Promise<CarritoDto> {
    const resultado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return CarritoMapper.toDto(resultado);
  }

  async create(createCarritoDto: CreateCarritoDto): Promise<CarritoDto> {
    const entidad: Carrito = CarritoMapper.toEntity(createCarritoDto);
    const resultado: Carrito = await this.carritoRepository.save(entidad);

    return CarritoMapper.toDto(resultado);
  }
  async remove(id: number): Promise<CarritoDto> {
    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el carrito');
    }
    await this.carritoRepository.remove(encontrado);
    return CarritoMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateCarritoDto: UpdateCarritoDto,
    user: Usuario,
  ): Promise<CarritoDto> {
    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el carrito');
    }
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

  async getCarritoContactoById(id: number): Promise<ContactoDto> {
    const resultado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        contacto: true,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }

    return ContactoMapper.toDto(resultado.contacto);
  }

  async createVenta(createVentaDto: CreateVentaDto): Promise<number> {
    let newDireccion: Direccion;
    let newContacto: Contacto;
    let newCarrito: Carrito;
    try {
      const direccion = {
        direccion: createVentaDto.contacto.calle_numero,
        depto_casa: createVentaDto.contacto.depto_casa,
        comuna_id: createVentaDto.contacto.comuna_id,
      };
      const entity = DireccionMapper.toEntity(direccion);
      newDireccion = await this.direccionRepository.save(entity);
    } catch (error) {
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
        apellido_paterno: apellidos ? apellidos[0] : '', // si no viene deja los espacios en blanco
        apellido_materno: apellidos ? apellidos[1] : '', // same
      };

      const entity = ContactoMapper.toEntityCarrito(contacto);
      newContacto = await this.contactoRepository.save(entity);
    } catch (error) {
      throw new BadRequestException();
    }
    try {
      createVentaDto.productos.map(async ({ id, cantidad }) => {
        const buscarProducto = await this.productoRepository.findOne({
          where: {
            id,
          },
        });
        buscarProducto.stock -= cantidad;
        await this.productoRepository.save(buscarProducto);
      });
    } catch (error) {
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
      const entity = CarritoMapper.toEntity(carrito);
      newCarrito = await this.carritoRepository.save(entity);
    } catch (error) {
      throw new BadRequestException();
    }

    return newCarrito.id;
  }
}
