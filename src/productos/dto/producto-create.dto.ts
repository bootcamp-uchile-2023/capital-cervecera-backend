import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
//import { Tipo } from '../entity/producto.entity';

export class CreateProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly casa_cervecera_id: number;

  @ApiProperty()
  @IsString()
  readonly tipo: string;

  @ApiProperty()
  @IsString()
  readonly grado_alcoholico: string;

  @ApiProperty()
  @IsString()
  readonly amargor_ibu: string;

  @ApiProperty()
  @IsString()
  readonly nombre_producto: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly precio_compra: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly precio_venta: number;

  @ApiProperty()
  @IsBoolean()
  readonly is_recomendado: boolean;

  @ApiProperty()
  @IsString() //prox base64
  url_imagen_card: string;

  @ApiProperty()
  @IsString() // prox base64
  url_imagen_detalle: string;

  @ApiProperty()
  @IsBoolean()
  is_promo: boolean;

  @ApiProperty()
  @IsInt()
  volumen_cc: number;

  @ApiProperty()
  @IsString()
  detalle: string;

  @ApiProperty()
  @IsInt()
  stock: number;

  @ApiProperty()
  @IsInt()
  precio_descuento: number;

  @ApiProperty()
  @IsString()
  sku: string;
}
