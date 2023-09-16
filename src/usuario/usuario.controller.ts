import { Controller, Get, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  getAllUsuario() {
    return this.usuarioService.getAllUsuarios();
  }

  //@Get(':id')
  //getUserById(@Param('id') id: string) {
  // console.log({ id });
  // return this.usuarioService;
  //}
}
