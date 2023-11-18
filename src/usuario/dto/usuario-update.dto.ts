import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
  @ApiProperty({
    example: 'Oops',
    description: ' El username del usuario',
  })
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty({
    example: '1234',
    description: 'El password del usuario',
  })
  @IsOptional()
  @IsString()
  password: string;
}
