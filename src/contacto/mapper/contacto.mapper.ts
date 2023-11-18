import { CreateContactoDto } from '../dto/contacto-create.dto';
import { ContactoDto } from '../dto/contacto.dto';
import { Contacto } from '../entity/contacto.entity';

export class ContactoMapper {
  static toDto(entidad: Contacto): ContactoDto {
    const dto = new ContactoDto();
    dto.id = entidad.id;
    dto.email = entidad.email;
    dto.telefono = entidad.telefono;
    dto.cliente = entidad.cliente;

    return dto;
  }

  static toDtoList(entidades: Contacto[]): ContactoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateContactoDto): Contacto {
    const entidad = new Contacto();

    entidad.email = dto.email;
    entidad.telefono = dto.telefono;
    entidad.cliente_id = dto.cliente_id;

    return entidad;
  }
}
