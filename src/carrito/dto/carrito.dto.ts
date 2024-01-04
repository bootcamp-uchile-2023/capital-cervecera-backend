import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString } from 'class-validator';

export class CarritoDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  contacto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  venta_id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  estado: string;

  @ApiProperty()
  @IsDate()
  created_at: Date;
}
