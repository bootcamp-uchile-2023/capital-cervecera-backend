import { ContactoCarritoDto } from '../dto/carrito-contacto.dto';
import { CreateContactoDto } from '../dto/contacto-create.dto';
import { ContactoDto } from '../dto/contacto.dto';
import { EstrellasCreateDto } from '../dto/estrellas-create.dto';
import { Contacto } from '../entity/contacto.entity';

export class ContactoMapper {
  static toDto(entidad: Contacto): ContactoDto {
    const dto = new ContactoDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;
    dto.rut = entidad.rut;
    dto.apellido_materno = entidad.apellido_materno;
    dto.apellido_paterno = entidad.apellido_paterno;
    dto.esta_atento = entidad.esta_atento;
    dto.usuario = entidad.usuario;
    dto.direccion = entidad.direccion;
    dto.base64_imagen = entidad.base64_imagen;
    dto.is_novedades = entidad.is_novedades;
    dto.email = entidad.email;
    dto.telefono = entidad.telefono;

    return dto;
  }

  static toDtoList(entidades: Contacto[]): ContactoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateContactoDto): Contacto {
    const entidad = new Contacto();

    entidad.nombre = dto.nombre;
    entidad.rut = dto.rut;
    entidad.apellido_materno = dto.apellido_materno;
    entidad.apellido_paterno = dto.apellido_paterno;
    entidad.esta_atento = dto.esta_atento;
    entidad.direccion_id = dto.direccion_id;
    entidad.usuario_id = dto.usuario_id;
    entidad.base64_imagen = dto.base64_imagen;
    entidad.is_novedades = dto.is_novedades;
    entidad.email = dto.email;
    entidad.telefono = dto.telefono;

    return entidad;
  }

  static toEntityCarrito(dto: ContactoCarritoDto): ContactoCarritoDto {
    const entidad = new Contacto();

    entidad.direccion_id = dto.direccion_id;
    entidad.nombre = dto.nombre;
    entidad.rut = dto.rut;
    entidad.apellido_materno = dto.apellido_materno;
    entidad.apellido_paterno = dto.apellido_paterno;
    entidad.is_novedades = dto.is_novedades;
    entidad.email = dto.email;
    entidad.telefono = dto.telefono;

    return entidad;
  }

  static toEstrellasEntity(dto: EstrellasCreateDto) {
    const entidad = new EstrellasCreateDto();

    entidad.contacto_id = dto.contacto_id;
    entidad.producto_id = dto.producto_id;
    entidad.estrellas = dto.estrellas;

    return entidad;
  }
}
