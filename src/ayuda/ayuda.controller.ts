import { Controller, Get } from '@nestjs/common';

@Controller('ayuda')
export class AyudaController {

  @Get()
  getAllAyuda() {
    return ["aca estara el modulo de ayuda "]
  }
}
