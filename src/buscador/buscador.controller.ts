import { Controller, Get } from '@nestjs/common';
import { BuscadorService } from './buscador.service';

@Controller('buscador')
export class BuscadorController {
  constructor(private readonly buscadorService: BuscadorService) {}
  @Get()
  getAllBuscador() {
    return this.buscadorService;
  }
}
