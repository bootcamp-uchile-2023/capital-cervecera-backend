import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { DireccionDto } from 'src/direccion/dto/direccion.dto';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';

export class ClienteDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  usuario_id: number;

  @ApiProperty()
  @IsInt()
  direccion_id: number;

  @ApiProperty()
  @IsString()
  rut: string;

  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsBoolean()
  esta_atento: boolean;

  @ApiProperty()
  @IsString()
  apellido_materno: string;

  @ApiProperty()
  @IsString()
  apellido_paterno: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  url_imagen: string;

  @ApiProperty()
  usuario: UsuarioDto;

  @ApiProperty()
  direccion: DireccionDto;
}