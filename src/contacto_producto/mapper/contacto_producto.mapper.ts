import { CreateContactoProductoDto } from '../dto/contacto_producto-create.dto';
import { ContactoProductoDto } from '../dto/contacto_producto.dto';
import { ContactoProducto } from '../entity/contacto_producto.entity';

export class ContactoProductoMapper {
  static toDto(entidad: ContactoProducto): ContactoProductoDto {
    const dto = new ContactoProductoDto();
    dto.estrellas = entidad.estrellas;
    dto.contacto_id = entidad.contacto_id;
    dto.producto_id = entidad.producto_id;

    return dto;
  }

  static toDtoList(entidades: ContactoProducto[]): ContactoProductoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateContactoProductoDto): ContactoProducto {
    const entidad = new ContactoProducto();

    entidad.estrellas = dto.estrellas;
    entidad.contacto_id = dto.contacto_id;
    entidad.producto_id = dto.producto_id;

    return entidad;
  }
}
