import { CreateUsuarioDto } from '../dto/usuario-create.dto';
import { UsuarioDto } from '../dto/usuario.dto';
import { Usuario } from '../entity/usuario.entity';

export class UsuarioMapper {
  static toDto(entidad: Usuario): UsuarioDto {
    const dto = new UsuarioDto();

    dto.password = entidad.password;
    dto.username = entidad.username;

    return dto;
  }

  static toDtoList(entidades: Usuario[]): UsuarioDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateUsuarioDto): Usuario {
    const entidad = new Usuario();

    entidad.password = dto.password;
    entidad.username = dto.username;

    return entidad;
  }
}
