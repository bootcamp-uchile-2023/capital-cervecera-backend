import { Controller, Get, Post } from '@nestjs/common';
import { SuscripcionesService } from './suscripciones.service';

@Controller('suscripciones')
export class SuscripcionesController {
  constructor(private readonly suscripcionesService: SuscripcionesService) {}

  @Get()
  getAllPacks() {
    return this.suscripcionesService.findAllSuscripciones();
  }
}
