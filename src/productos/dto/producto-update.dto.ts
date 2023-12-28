import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProductoDto {
  @ApiProperty({
    example: 'CER-IPA-500-001',
    description: ' sku del producto',
  })
  @IsOptional()
  @IsString()
  sku: string;

  @ApiProperty({
    example: 'Lager',
    description: ' El tipo de cerveza que desea actualizar',
  })
  @IsOptional()
  @IsString()
  tipo: string;

  @ApiProperty({
    example: '15%',
    description: 'El grado alcoholico del producto',
  })
  @IsOptional()
  @IsString()
  grado_alcoholico: string;

  @ApiProperty({ example: '20', description: 'Amargor del producto' })
  @IsOptional()
  @IsString()
  amargor_ibu: string;

  @ApiProperty({ example: 'Coronawa', description: ' Nombre del producto' })
  @IsOptional()
  @IsString()
  nombre_producto: string;

  @ApiProperty({ example: '1500', description: 'Precio venta del producto' })
  @IsOptional()
  @IsInt()
  precio_venta: number;

  @ApiProperty({ example: 'true', description: 'El producto es recomendado' })
  @IsOptional()
  @IsBoolean()
  is_recomendado: boolean;

  @ApiProperty({ example: 1, description: 'El id de la casa cervecera' })
  @IsOptional()
  @IsInt()
  casa_cervecera_id: number;

  @ApiProperty({
    example: 'aqui va un base s e s e n t a y  c u a t r o ',
    description: 'b a s e64 de la imagen',
  })
  @IsString()
  base64_imagen_card: string;

  @ApiProperty({
    example: 'aqui va un base s e s e n t a y  c u a t r o ',
    description: 'base64 del detalle la imagen',
  })
  @IsString()
  base64_imagen_detalle: string;

  @ApiProperty({
    example: true,
    description: 'booleano de si esta en promo o no',
  })
  @IsBoolean()
  is_promo: boolean;

  @ApiProperty({
    example: 750,
    description: 'cc del producto',
  })
  @IsInt()
  volumen_cc: number;

  @ApiProperty({
    example: 'este producto es entero de weno',
    description: 'detalle del producto',
  })
  @IsString()
  detalle: string;

  @ApiProperty({
    example: 100,
    description: 'numero del stock disponible',
  })
  @IsInt()
  stock: number;

  @ApiProperty({
    example: 10,
    description: 'descuento del producto ',
  })
  @IsInt()
  precio_descuento: number;
}
