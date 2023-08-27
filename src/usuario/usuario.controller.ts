import { Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

  @Get()
  getAllUsuario() {
    return ["aca estara el modulo de los usuarios"]
  }
}
