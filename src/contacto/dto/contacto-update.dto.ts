import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateContactoDto {
  @ApiProperty({
    example: '1',
    description: 'id del usuario',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly usuario_id: number;

  @ApiProperty({
    example: '1',
    description: 'id de la direccion',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly direccion_id: number;

  @ApiProperty({
    example: '1111111-1',
    description: 'rut del contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly rut: string;

  @ApiProperty({
    example: '+56987590175',
    description: 'telefono del contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly telefono: string;

  @ApiProperty({
    example: 'cr.lizamal@gmail.com',
    description: 'email del contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly email: string;

  @ApiProperty({
    example: 'Poke',
    description: 'nombre del contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly nombre: string;

  @ApiProperty({
    example: 'true',
    description: '',
  })
  @IsOptional()
  @IsBoolean({ message: 'boolean de atencion' })
  readonly esta_atento: boolean;

  @ApiProperty({
    example: 'Acevedo',
    description: 'apellido paterno de contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_materno: string;

  @ApiProperty({
    example: 'Acevedo',
    description: 'apellido materno del contacto',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_paterno: string;

  @ApiProperty({
    example:
      'https://global-oss.epal.gg/data/cover/1292755/16613463698394149.jpeg',
    description: 'Url del contacto',
  })
  @IsOptional()
  @IsString()
  base64_imagen: string;

  @IsOptional()
  @IsBoolean({ message: 'boolean de novedades' })
  readonly is_novedades: boolean;
}
