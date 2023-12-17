import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCasaCerveceraDto {
  @ApiProperty({
    example: 'Altamira',
    description: ' El tipo de casa cervecera que desea actualizar',
  })
  @IsOptional()
  @IsString()
  nombre: string;
}
