import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsInt, IsString } from 'class-validator';

export class CarritoContactoDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  calle_numero: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  is_novedades: boolean;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  nombres: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  apellidos: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  rut: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  telefono: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un Int' })
  comuna_id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  depto_casa: string;
}
