import { ApiProperty } from '@nestjs/swagger';
import { PackDto } from './pack.dto';

export class PacksDto {
  @ApiProperty()
  readonly packs: PackDto[];
}

export default PacksDto;
