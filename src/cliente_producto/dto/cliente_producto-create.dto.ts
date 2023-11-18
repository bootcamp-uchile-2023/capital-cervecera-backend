import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateClienteProductoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly cliente_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly producto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly estrellas: number;
}
