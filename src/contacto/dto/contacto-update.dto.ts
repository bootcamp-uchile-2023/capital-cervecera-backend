import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateContactoDto {
  @ApiProperty({
    example: 'cr.lizamal@gmail.com',
    description: ' El email del contacto',
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    example: '84790175',
    description: 'El telefono del contacto',
  })
  @IsOptional()
  @IsString()
  telefono: string;

  @ApiProperty({
    example: '1',
    description: 'El id del cliente',
  })
  @IsOptional()
  @IsInt()
  cliente_id: number;
}
