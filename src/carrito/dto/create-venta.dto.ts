import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsObject, IsString } from 'class-validator';
import { CarritoContactoDto } from './carrito-contacto.dto';
import { VentaProductoDto } from './venta-producto.dto';

export class CreateVentaDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  tipo: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  monto: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  forma_pago: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  total: number;

  @ApiProperty({ type: [VentaProductoDto], required: true })
  @IsArray({ message: 'el atributo debe ser un array' })
  productos: VentaProductoDto[];

  @ApiProperty({ type: CarritoContactoDto, required: true })
  @IsObject({ message: 'el atributo debe ser un object' })
  contacto: CarritoContactoDto;
}
