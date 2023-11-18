import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProductoDto {
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

  @ApiProperty({ example: '1000', description: 'Precio compra del producto' })
  @IsOptional()
  @IsInt()
  precio_compra: number;

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
    example: 'https://www.ccu.cl/wp-content/uploads/2019/06/DORADA-12.png',
    description: 'Url del producto',
  })
  @IsOptional()
  @IsString()
  url_imagen: string;
}
