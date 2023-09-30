import { Injectable } from '@nestjs/common';

@Injectable()
export class CarritoDeCompraService {
  private carritoDeCompra = [
    {
      productos: 'Cervezas',
      promociones: 'descuentos',
      subtotal: 12313,
      total: 1231312,
    },
  ];
  getAllCarrito() {
    return this.carritoDeCompra;
  }
}
