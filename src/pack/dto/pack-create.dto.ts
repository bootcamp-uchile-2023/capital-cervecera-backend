import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreatePackDto {
  @ApiProperty()
  @IsString()
  readonly nombre: string;

  @ApiProperty()
  @IsInt()
  readonly precio_venta: number;
}
