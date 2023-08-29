import { Controller, Get } from '@nestjs/common';

@Controller('tienda')
export class TiendaController {

  @Get()
  getAllTienda() {
    return ["aca veremos el modulo de tienda!"]
  }
}
