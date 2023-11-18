import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateClienteProductoDto {
  @ApiProperty({
    example: '1',
    description: ' El id del cliente',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  cliente_id: number;

  @ApiProperty({
    example: '1',
    description: 'El id del producto',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  producto_id: number;

  @ApiProperty({
    example: '3',
    description: 'el numero de estrellas del producto ',
  })
  @IsOptional()
  @IsInt({ message: 'el atributo debe ser un number' })
  estrellas: number;
}
