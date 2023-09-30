import { ApiProperty } from '@nestjs/swagger';

export class CreatePromoDto {
  @ApiProperty()
  readonly producto: string;
  @ApiProperty()
  readonly descuento: number;
}
