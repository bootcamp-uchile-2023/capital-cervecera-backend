import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import {CarritoDeCompraDto} from '../carritoDeComprar.Dto';


export class carritoDeCompraDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string '})
  readonly producto: string;

  @ApiProperty()
  @IsString({}, {message: 'el atributo debe ser un string'})
  readonly promociones: string;

  @ApiProperty()
  @IsNumber({}, {message: 'el atributo debe ser un Number ' })
  readonly subtotal: number;


  @ApiProperty()
  @IsNumber({ message: 'el atributo debe ser un number ' })
  readonly total: number;

}

export default CarritoDeCompraDto;