import { CreatePackDto } from '../dto/pack-create.dto';
import { PackDto } from '../dto/pack.dto';
import { Pack } from '../entity/pack.entity';

export class PackMapper {
  static toDto(entidad: Pack): PackDto {
    const dto = new PackDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;
    dto.precio_venta = entidad.precio_venta;

    return dto;
  }

  static toDtoList(entidades: Pack[]): PackDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreatePackDto): Pack {
    const entidad = new Pack();

    entidad.nombre = dto.nombre;
    entidad.precio_venta = dto.precio_venta;

    return entidad;
  }
}
