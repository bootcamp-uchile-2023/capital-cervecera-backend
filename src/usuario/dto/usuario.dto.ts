import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class UsuarioDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el username debe ser un string' })
  username: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  password: string;
}
