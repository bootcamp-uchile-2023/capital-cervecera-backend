import { Controller, Get } from '@nestjs/common';
import { QuienesSomosService } from './quienes-somos.service';

@Controller('quienes-somos')
export class QuienesSomosController {
  constructor(private readonly quienesSomosService: QuienesSomosService) {}
  @Get()
  getAllQuienesSomos() {
    return this.quienesSomosService;
  }
}
