import { Module } from '@nestjs/common';
import { CarritoDeCompraController } from './carrito-de-compra.controller';

@Module({
  controllers: [CarritoDeCompraController]
})
export class CarritoDeCompraModule {}
