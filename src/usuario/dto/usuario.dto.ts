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
  @IsString({ message: 'El atributo debe ser un string' })
  readonly direcciones: string; 

  @ApiProperty()
  @IsNumber({ message: 'El atributo debe ser un número' })
  readonly descuentos: number; 

  @ApiProperty()
  @IsString({ message: 'El atributo debe ser un string' })
  readonly contacto: string; 

  @ApiProperty()
  readonly fecha: Date;
}

export default UsuarioDto;