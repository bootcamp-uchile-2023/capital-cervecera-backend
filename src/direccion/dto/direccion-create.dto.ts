import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateDireccionDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly direccion: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly numero: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  readonly depto_casa: boolean;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un string' })
  readonly comuna_id: number;
}
