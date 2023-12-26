import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCarritoDto {
  @ApiProperty({
    example: 'Vacio',
    description: 'El estado del carrito esta Vacio',
  })
  @IsOptional()
  @IsString()
  estado: string;

  @ApiProperty({
    example: '1',
    description: 'El id de la venta',
  })
  @IsOptional()
  @IsInt()
  venta_id: number;

  @ApiProperty({
    example: '1',
    description: 'El id del contacto',
  })
  @IsOptional()
  @IsInt()
  contacto_id: number;
}
