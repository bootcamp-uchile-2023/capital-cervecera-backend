import { Controller, Get } from '@nestjs/common';

@Controller('carrito-de-compra')
export class CarritoDeCompraController {

  @Get()
  getAllCarritoDeCompra() {
    return ["aca estara el modulo de carrito de compra"]
  }
}
