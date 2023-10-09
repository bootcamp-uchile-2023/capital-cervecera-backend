import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateProductosDto } from '../../productos/dto/productos-create.dto';

export class PackDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string '})
  readonly nombre: string;

  @ApiProperty()
  @IsNumber({}, {message: 'el atributo debe ser un number'})
  readonly estrellas: number;

  @ApiProperty()
  @IsNumber({}, {message: 'el atributo debe ser un Number ' })
  readonly precio: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string ' })
  readonly imagen_url: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string ' })
  readonly casa_cervecera: string;

  @ApiProperty()
  readonly productos: CreateProductosDto[];
}

export default PackDto;