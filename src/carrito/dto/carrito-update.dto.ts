import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCarritoDto {
  @ApiProperty({
    example: '1000',
    description: ' El total de la venta es de 1000 ',
  })
  @IsOptional()
  @IsInt()
  total: number;

  @ApiProperty({
    example: '500',
    description: 'El subtotal de la venta es de 500',
  })
  @IsOptional()
  @IsInt()
  sub_total: number;

  @ApiProperty({
    example: 'Vacio',
    description: 'El estado del carrito esta Vacio',
  })
  @IsOptional()
  @IsString()
  estado: string;
}
