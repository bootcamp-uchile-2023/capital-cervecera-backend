import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoModule } from './carrito/carrito.module';
import { Carrito } from './carrito/entity/carrito.entity';
import { CasaCerveceraModule } from './casacervecera/casacervecera.module';
import { Casa_cervecera } from './casacervecera/entity/casacervecera.entity';

import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entity/cliente.entity';
import { ClienteProductoModule } from './cliente_producto/cliente_producto.module';
import { ClienteProducto } from './cliente_producto/entity/cliente_producto.entity';
import { ComunaModule } from './comuna/comuna.module';
import { Comuna } from './comuna/entity/comuna.entity';
import { ContactoModule } from './contacto/contacto.module';
import { Contacto } from './contacto/entity/contacto.entity';
import { DireccionModule } from './direccion/direccion.module';
import { Direccion } from './direccion/entity/direccion.entity';
import { Pack } from './pack/entity/pack.entity';
import { PackModule } from './pack/pack.module';
import { Producto } from './productos/entity/producto.entity';
import { Region } from './region/entity/region.entity';
import { RegionModule } from './region/region.module';
import { Usuario } from './usuario/entity/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33060,
      username: 'root',
      password: 'taller',
      database: 'CAPITAL',
      entities: [
        Producto,
        Carrito,
        Casa_cervecera,
        Contacto,
        Cliente,
        Usuario,
        Region,
        Direccion,
        Comuna,
        Pack,
        ClienteProducto,
      ],
    }),
    ProductosModule,
    CarritoModule,
    CasaCerveceraModule,
    ContactoModule,
    ClienteModule,
    UsuarioModule,
    RegionModule,
    DireccionModule,
    ComunaModule,
    PackModule,
    ClienteProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
