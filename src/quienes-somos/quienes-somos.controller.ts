import { Controller, Get } from '@nestjs/common';

@Controller('quienes-somos')
export class QuienesSomosController {

  @Get()
  getAllQuienesSomos() {
    return ["aca se mostrara el modulo de quienes somos "]
  }
}

