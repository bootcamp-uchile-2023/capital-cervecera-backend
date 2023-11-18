import { CreateCarritoDto } from '../dto/carrito-create.dto';
import { CarritoDto } from '../dto/carrito.dto';
import { Carrito } from '../entity/carrito.entity';

export class CarritoMapper {
  static toDto(entidad: Carrito): CarritoDto {
    const dto = new CarritoDto();
    dto.id = entidad.id;
    dto.cliente_id = entidad.cliente_id;
    dto.created_at = entidad.created_at;
    dto.estado = entidad.estado;
    dto.sub_total = entidad.sub_total;
    dto.total = entidad.total;

    return dto;
  }

  static toDtoList(entidades: Carrito[]): CarritoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateCarritoDto): Carrito {
    const entidad = new Carrito();

    entidad.estado = dto.estado;
    entidad.sub_total = dto.sub_total;
    entidad.total = dto.total;
    return entidad;
  }
}
