import { CreateClienteDto } from '../dto/cliente-create.dto';
import { ClienteDto } from '../dto/cliente.dto';
import { EstrellasCreateDto } from '../dto/estrellas-create.dto';
import { Cliente } from '../entity/cliente.entity';

export class ClienteMapper {
  static toDto(entidad: Cliente): ClienteDto {
    const dto = new ClienteDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;
    dto.rut = entidad.rut;
    dto.apellido_materno = entidad.apellido_materno;
    dto.apellido_paterno = entidad.apellido_paterno;
    dto.esta_atento = entidad.esta_atento;
    dto.usuario = entidad.usuario;
    dto.direccion = entidad.direccion;
    dto.url_imagen = entidad.url_imagen;

    return dto;
  }

  static toDtoList(entidades: Cliente[]): ClienteDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateClienteDto): Cliente {
    const entidad = new Cliente();

    entidad.nombre = dto.nombre;
    entidad.rut = dto.rut;
    entidad.apellido_materno = dto.apellido_materno;
    entidad.apellido_paterno = dto.apellido_paterno;
    entidad.esta_atento = dto.esta_atento;
    entidad.direccion_id = dto.direccion_id;
    entidad.usuario_id = dto.usuario_id;
    entidad.url_imagen = dto.url_imagen;

    return entidad;
  }

  static toEstrellasEntity(dto: EstrellasCreateDto) {
    const entidad = new EstrellasCreateDto();

    entidad.cliente_id = dto.cliente_id;
    entidad.producto_id = dto.producto_id;
    entidad.estrellas = dto.estrellas;

    return entidad;
  }
}
