import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateContactoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly usuario_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly direccion_id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly rut: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly telefono: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly email: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly nombre: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  readonly esta_atento: boolean;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_materno: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_paterno: string;

  @ApiProperty()
  @IsString()
  readonly base64_imagen: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  readonly is_novedades: boolean;
}
