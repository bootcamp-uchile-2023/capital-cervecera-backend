import { CreateDireccionDto } from '../dto/direccion-create.dto';
import { DireccionDto } from '../dto/direccion.dto';
import { Direccion } from '../entity/direccion.entity';

export class DireccionMapper {
  static toDto(entidad: Direccion): DireccionDto {
    const dto = new DireccionDto();
    dto.id = entidad.id;
    dto.direccion = entidad.direccion;
    dto.depto_casa = entidad.depto_casa;
    dto.comuna = entidad.comuna;

    return dto;
  }

  static toDtoList(entidades: Direccion[]): DireccionDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateDireccionDto): Direccion {
    const entidad = new Direccion();
    entidad.direccion = dto.direccion;
    entidad.depto_casa = dto.depto_casa;
    entidad.comuna_id = dto.comuna_id;

    return entidad;
  }
}
