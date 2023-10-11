import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import {UsuarioDto} from '../../usuario.Dto';
 
export class UsuarioDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string '})
  readonly id: string;

  @ApiProperty()
  @IsNumber({}, {message: 'el atributo debe ser un number'})
  readonly username: string;

  @ApiProperty()
  @IsNumber({}, {message: 'el atributo debe ser un Number ' })
  readonly email: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string ' })
  readonly password: string;

 
  @ApiProperty()
  readonly id: UsuarioDto[];
}

export default UsuarioDto;