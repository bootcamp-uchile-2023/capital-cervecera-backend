import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { QuienesSomosModule } from './quienes-somos/quienes-somos.module';
import { AyudaModule } from './ayuda/ayuda.module';
import { CarritoDeCompraModule } from './carrito-de-compra/carrito-de-compra.module';
import { UsuarioModule } from './usuario/usuario.module';
import { BuscadorModule } from './buscador/buscador.module';

@Module({
  imports: [TiendaModule, QuienesSomosModule, AyudaModule, CarritoDeCompraModule, UsuarioModule, BuscadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
