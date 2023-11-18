import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCarritoDto {
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly cliente_id: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly total: number;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly sub_total: number;

  @ApiProperty()
  @IsString()
  readonly estado: string;
}
