import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class EstrellasCreateDto {
  @ApiProperty()
  @IsInt()
  estrellas: number;

  @ApiProperty()
  @IsInt()
  contacto_id: number;

  @ApiProperty()
  @IsInt()
  producto_id: number;
}
