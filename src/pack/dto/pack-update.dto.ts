import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePackDto {
  @ApiProperty({
    example: 'domisk',
    description: ' El nombre del pack',
  })
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty({
    example: '10000',
    description: 'El precio_venta',
  })
  @IsOptional()
  @IsInt()
  precio_venta: number;
}
