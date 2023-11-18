import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDireccionDto {
  @ApiProperty({
    example: 'Pasaje Alcala',
    description: 'Direccion del usuario',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly direccion: string;

  @ApiProperty({
    example: '2276',
    description: 'numero de la direccion del usuario',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly numero: string;

  @ApiProperty({
    example: true,
    description: 'Casa o Departamento del usuario',
  })
  @IsOptional()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  readonly depto_casa: boolean;

  @ApiProperty({
    example: '1',
    description: 'id de la comuna del usuario',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un string' })
  readonly comuna_id: number;
}
