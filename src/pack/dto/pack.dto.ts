import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class PackDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  nombre: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  precio_venta: number;
}
