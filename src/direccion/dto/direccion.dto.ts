import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
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
  numero: string;

  @ApiProperty()
  @IsBoolean({ message: 'el atributo debe ser un boolean' })
  depto_casa: boolean;

  @ApiProperty()
  comuna: ComunaDto;
}
