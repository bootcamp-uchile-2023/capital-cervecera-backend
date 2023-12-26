import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateContactoProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly contacto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly producto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly estrellas: number;
}
