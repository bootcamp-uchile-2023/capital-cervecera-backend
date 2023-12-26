import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class VentaProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  cantidad: number;
}
