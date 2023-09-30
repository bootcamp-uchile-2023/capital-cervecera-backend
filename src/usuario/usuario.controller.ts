import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  getAllUsuario() {
    return this.usuarioService.getAllUsuarios();
  }
}
