import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateComunaDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly nombre: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly region_id: number;
}
