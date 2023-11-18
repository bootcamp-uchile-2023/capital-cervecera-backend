import { CreateCasaCerveceraDto } from '../dto/casacervecera-create.dto';
import { CasaCerveceraDto } from '../dto/casacervecera.dto';
import { Casa_cervecera } from '../entity/casacervecera.entity';

export class CasaCerveceraMapper {
  static toDto(entidad: Casa_cervecera): CasaCerveceraDto {
    const dto = new CasaCerveceraDto();
    dto.id = entidad.id;
    dto.nombre = entidad.nombre;
    dto.resenia = entidad.resenia;
    return dto;
  }

  static toDtoList(entidades: Casa_cervecera[]): CasaCerveceraDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateCasaCerveceraDto): Casa_cervecera {
    const entidad = new Casa_cervecera();
    entidad.nombre = dto.nombre;
    entidad.resenia = dto.resenia;
    return entidad;
  }
}
