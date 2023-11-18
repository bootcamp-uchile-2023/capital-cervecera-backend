import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
//import { Tipo } from '../entity/producto.entity';

export class CreateProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly casa_cervecera_id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly tipo: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly grado_alcoholico: string;

  @ApiProperty()
  @IsString()
  readonly amargor_ibu: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
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
  @IsString()
  readonly url_imagen: string;
}
