import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { ComunaDto } from 'src/comuna/dto/comuna.dto';

export class DireccionDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  direccion: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  depto_casa: string;

  @ApiProperty()
  comuna: ComunaDto;
}
