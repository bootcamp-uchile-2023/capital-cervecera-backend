import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

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

  @ApiProperty({
    example: 'Admin',
    description: ' El rol del usuario',
  })
  @IsOptional()
  @IsBoolean()
  isAdmin: boolean;

  @ApiProperty({
    example: 'Oops@gmail.com',
    description: ' El correo del usuario',
  })
  @IsOptional()
  @IsEmail()
  email: string;
}
