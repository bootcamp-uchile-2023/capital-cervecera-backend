import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString } from 'class-validator';
//import { Tipo } from '../entity/producto.entity';

export class CarritoDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  total: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  sub_total: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  cliente_id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  estado: string;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}