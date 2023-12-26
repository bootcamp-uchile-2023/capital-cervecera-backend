import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { PackDto } from 'src/pack/dto/pack.dto';

export class ProductoDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  sku: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  estrellas: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  tipo: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  grado_alcoholico: string;

  @ApiProperty()
  @IsString()
  amargor_ibu: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  nombre_producto: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  precio_compra: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  precio_venta: number;

  @ApiProperty()
  @IsBoolean({ message: 'El atributo debe ser un boolean' })
  is_recomendado: boolean;

  @ApiProperty()
  @IsString()
  casa_cervecera: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' }) //prox base64
  base64_imagen_card: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' }) // prox base64
  base64_imagen_detalle: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  is_promo: boolean;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  volumen_cc: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  detalle: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  stock: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  precio_descuento: number;

  @ApiProperty()
  packs: PackDto[];
}
