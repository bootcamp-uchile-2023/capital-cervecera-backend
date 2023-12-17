import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class UsuarioDto {
  @ApiProperty()
  @IsString({ message: 'el username debe ser un string' })
  username: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  password: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  isAdmin: boolean;

  @ApiProperty()
  @IsEmail()
  email: string;
}
