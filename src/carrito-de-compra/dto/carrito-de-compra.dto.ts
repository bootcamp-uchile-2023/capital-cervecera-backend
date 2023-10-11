import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CarritoCompraDto {
  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly venta_id: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly carrito: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly productos: string;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly promociones: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly subtotal: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly total: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly contacto: string;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly envio: string;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly metodo_envio: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly fecha_venta: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El atributo debe ser un número' })
  readonly descuentos: number;

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser una cadena de texto' })
  readonly detalle_venta: string;
}
