import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class ContactoCarritoDto {
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
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_materno: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_paterno: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  readonly is_novedades: boolean;
}
