import { CreateCarritoDto } from '../dto/carrito-create.dto';
import { CarritoDto } from '../dto/carrito.dto';
import { Carrito } from '../entity/carrito.entity';

export class CarritoMapper {
  static toDto(entidad: Carrito): CarritoDto {
    const dto = new CarritoDto();
    dto.id = entidad.id;
    dto.contacto_id = entidad.contacto_id;
    dto.created_at = entidad.created_at;
    dto.estado = entidad.estado;
    dto.venta_id = entidad.venta_id;

    return dto;
  }

  static toDtoList(entidades: Carrito[]): CarritoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateCarritoDto): Carrito {
    const entidad = new Carrito();

    entidad.estado = dto.estado;
    entidad.contacto_id = dto.contacto_id;
    entidad.venta_id = dto.venta_id;

    return entidad;
  }
}
