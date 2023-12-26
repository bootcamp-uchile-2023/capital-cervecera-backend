import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCarritoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly contacto_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly venta_id: number;

  @ApiProperty()
  @IsString()
  readonly estado: string;
}
