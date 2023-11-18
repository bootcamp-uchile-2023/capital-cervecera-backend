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

  @ApiProperty({
    example: 'Buen producto',
    description: 'resenia de la casa cervecera que desea actualizar ',
  })
  @IsOptional()
  @IsString()
  resenia: string;
}
