import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { PackDto } from 'src/pack/dto/pack.dto';
//import { Tipo } from '../entity/producto.entity';

export class ProductoDto {
  @ApiProperty()
  @IsInt()
  id: number;

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
  estrellas: number;

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
  @IsString({ message: 'el atributo debe ser un string' })
  url_imagen: string;

  @ApiProperty()
  packs: PackDto[];
}
