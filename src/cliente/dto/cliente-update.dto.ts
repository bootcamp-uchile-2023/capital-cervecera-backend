import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto {
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
    description: 'rut del cliente',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly rut: string;

  @ApiProperty({
    example: 'Poke',
    description: 'nombre del cliente',
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
    description: 'apellido paterno de cliente',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_materno: string;

  @ApiProperty({
    example: 'Acevedo',
    description: 'apellido materno del cliente',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly apellido_paterno: string;

  @ApiProperty({
    example:
      'https://global-oss.epal.gg/data/cover/1292755/16613463698394149.jpeg',
    description: 'Url del cliente',
  })
  @IsOptional()
  @IsString()
  url_imagen: string;
}
