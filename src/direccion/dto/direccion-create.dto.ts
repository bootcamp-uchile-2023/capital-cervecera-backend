import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateDireccionDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly direccion: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly depto_casa: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un string' })
  readonly comuna_id: number;
}
