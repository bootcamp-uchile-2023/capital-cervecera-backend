import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CarritoCompraDto {
  
  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un number' })
  readonly carrito_id: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de string' })
  readonly promociones: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un number' })
  readonly subtotal: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un number' })
  readonly total: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de string' })
  readonly contacto: string;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de string' })
  readonly envio: string;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de string' })
  readonly metodo_envio: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un number' })
  readonly fecha_venta: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un number' })
  readonly descuentos: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de string' })
  readonly detalle_venta: string;
 
  @ApiProperty()
  readonly productos: CarritoCompraDto[];
}
