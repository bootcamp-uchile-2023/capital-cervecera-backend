import { ApiProperty } from '@nestjs/swagger';

export class CreatePacksDto {
  @ApiProperty()
  readonly packs: string;
}
