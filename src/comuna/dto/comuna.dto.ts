import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { RegionDto } from 'src/region/dto/region.dto';

export class ComunaDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  nombre: string;

  @ApiProperty()
  region: RegionDto;
}
