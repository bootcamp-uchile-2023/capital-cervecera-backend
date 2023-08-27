import { Controller, Get } from '@nestjs/common';

@Controller('buscador')
export class BuscadorController {
  @Get()
  getAllBuscador() {
    return ["aca estara el modulo de buscador"]
  }
}
