import { CreateClienteProductoDto } from '../dto/cliente_producto-create.dto';
import { ClienteProductoDto } from '../dto/cliente_producto.dto';
import { ClienteProducto } from '../entity/cliente_producto.entity';

export class ClienteProductoMapper {
  static toDto(entidad: ClienteProducto): ClienteProductoDto {
    const dto = new ClienteProductoDto();
    dto.estrellas = entidad.estrellas;
    dto.cliente_id = entidad.cliente_id;
    dto.producto_id = entidad.producto_id;

    return dto;
  }

  static toDtoList(entidades: ClienteProducto[]): ClienteProductoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateClienteProductoDto): ClienteProducto {
    const entidad = new ClienteProducto();

    entidad.estrellas = dto.estrellas;
    entidad.cliente_id = dto.cliente_id;
    entidad.producto_id = dto.producto_id;

    return entidad;
  }
}
