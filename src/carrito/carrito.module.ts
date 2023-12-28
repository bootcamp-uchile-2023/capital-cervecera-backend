import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityFactory } from 'src/ability/ability.factory';
import { AbilityModule } from 'src/ability/ability.module';
import { Contacto } from 'src/contacto/entity/contacto.entity';
import { Direccion } from 'src/direccion/entity/direccion.entity';
import { Producto } from 'src/productos/entity/producto.entity';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';
import { Carrito } from './entity/carrito.entity';
import { Venta } from './entity/venta.entity';

@Module({
  imports: [
    AbilityModule,
    TypeOrmModule.forFeature([Carrito, Venta, Producto, Contacto, Direccion]),
  ],
  controllers: [CarritoController],
  providers: [CarritoService, AbilityFactory],
})
export class CarritoModule {}
