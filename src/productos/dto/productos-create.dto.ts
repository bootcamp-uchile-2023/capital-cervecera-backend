import { ApiProperty } from '@nestjs/swagger';

export class CreateProductosDto {
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  readonly estrellas: number;
  @ApiProperty()
  readonly precio_compra: number;
  @ApiProperty()
  readonly precio_venta: number;
}
