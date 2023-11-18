import { CreateComunaDto } from '../dto/comuna-create.dto';
import { ComunaDto } from '../dto/comuna.dto';
import { Comuna } from '../entity/comuna.entity';

export class ComunaMapper {
  static toDto(entidad: Comuna): ComunaDto {
    const dto = new ComunaDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;
    dto.region = entidad.region;

    return dto;
  }

  static toDtoList(entidades: Comuna[]): ComunaDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateComunaDto): Comuna {
    const entidad = new Comuna();

    entidad.nombre = dto.nombre;
    entidad.region_id = dto.region_id;

    return entidad;
  }
}
