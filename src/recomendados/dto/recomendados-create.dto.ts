import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateRecomendadosDto {
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly estrellas: number;
  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number ' })
  readonly precio_compra: number;
}
