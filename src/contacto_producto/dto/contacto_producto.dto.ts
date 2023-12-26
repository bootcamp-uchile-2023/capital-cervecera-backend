import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ContactoProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  contacto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  producto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  estrellas: number;
}
