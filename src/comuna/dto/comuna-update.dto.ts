import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateComunaDto {
  @ApiProperty({
    example: 'San Antonio',
    description: 'Nombre de la comuna',
  })
  @IsOptional()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly nombre: string;

  @ApiProperty({
    example: '1',
    description: 'id de la region',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  readonly region_id: number;
}
