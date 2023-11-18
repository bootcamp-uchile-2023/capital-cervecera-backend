import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { ClienteDto } from 'src/cliente/dto/cliente.dto';

export class ContactoDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  telefono: string;

  @ApiProperty()
  @IsInt({ message: 'el atributo debe ser un number' })
  cliente_id: number;

  @ApiProperty()
  cliente: ClienteDto;
}
