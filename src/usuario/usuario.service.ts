import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  private usuario = [
    {
      // id: "2"
      username: 'cristian',
      email: 'cr.lizamal@gmail.com',
      password: 12345,
      // carrito
    },
  ];
  getAllUsuarios() {
    return this.usuario;
  }
}
