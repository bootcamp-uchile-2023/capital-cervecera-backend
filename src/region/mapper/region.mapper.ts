import { CreateRegionDto } from '../dto/region-create.dto';
import { RegionDto } from '../dto/region.dto';
import { Region } from '../entity/region.entity';

export class RegionMapper {
  static toDto(entidad: Region): RegionDto {
    const dto = new RegionDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;

    return dto;
  }

  static toDtoList(entidades: Region[]): RegionDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateRegionDto): Region {
    const entidad = new Region();

    entidad.nombre = dto.nombre;

    return entidad;
  }
}
