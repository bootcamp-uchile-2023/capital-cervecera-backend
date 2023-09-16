import { Controller, Get } from '@nestjs/common';
import { AyudaService } from './ayuda.service';

@Controller('ayuda')
export class AyudaController {
  constructor(private readonly ayudaService: AyudaService) {}
  @Get()
  getAllAyuda() {
    return this.ayudaService;
  }
}
