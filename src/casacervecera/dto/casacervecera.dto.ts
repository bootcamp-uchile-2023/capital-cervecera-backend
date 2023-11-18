import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CasaCerveceraDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  nombre: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  resenia: string;
}
