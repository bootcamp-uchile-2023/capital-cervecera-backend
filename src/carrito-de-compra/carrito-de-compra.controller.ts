import { Controller, Get } from '@nestjs/common';
import { CarritoDeCompraService } from './carrito-de-compra.service';

@Controller('carritoDeCompra')
export class CarritoDeCompraController {
  constructor(
    private readonly carritoDeCompraService: CarritoDeCompraService,
  ) {}
  @Get()
  getAllCarritoDeCompra() {
    return this.carritoDeCompraService.getAllCarrito();
  }
}
