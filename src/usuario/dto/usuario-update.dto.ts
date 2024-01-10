import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateUsuarioDto {
  @ApiProperty({
    example: true,
    description: 'si es true será admin',
  })
  @IsBoolean()
  isAdmin: boolean;
}
