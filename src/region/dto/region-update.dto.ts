import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto {
  @ApiProperty({
    example: 'Valparaiso',
    description: ' Region de la comuna a actualizar',
  })
  @IsOptional()
  @IsString()
  nombre: string;
}
