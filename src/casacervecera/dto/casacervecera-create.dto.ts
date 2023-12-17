import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCasaCerveceraDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string ' })
  readonly nombre: string;
}
