import { Module } from '@nestjs/common';
import { CarritoDeCompraController } from './carrito-de-compra.controller';
import { CarritoDeCompraService } from './carrito-de-compra.service';

@Module({
  controllers: [CarritoDeCompraController],
  providers: [CarritoDeCompraService],
})
export class CarritoDeCompraModule {}
