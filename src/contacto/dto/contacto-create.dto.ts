import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateContactoDto {
  @ApiProperty()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsString()
  readonly telefono: string;

  @ApiProperty()
  @IsInt()
  readonly cliente_id: number;
}
