import { Controller, Get } from '@nestjs/common';
import { PromosService } from './promos.service';


@Controller('productos/promos')
export class PromosController {
  constructor(private readonly promosService: PromosService) {}
  @Get()
  getAllPromos() {
    return this.promosService.findAll();
  }
}
