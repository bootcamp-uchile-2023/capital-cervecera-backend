import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AbilitiesGuard } from './ability/abilities.guard';
import { AbilityModule } from './ability/ability.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarritoModule } from './carrito/carrito.module';
import { Carrito } from './carrito/entity/carrito.entity';
import { Venta } from './carrito/entity/venta.entity';
import { CasaCerveceraModule } from './casacervecera/casacervecera.module';
import { Casa_cervecera } from './casacervecera/entity/casacervecera.entity';
import { ComunaModule } from './comuna/comuna.module';
import { Comuna } from './comuna/entity/comuna.entity';
import { ContactoModule } from './contacto/contacto.module';
import { Contacto } from './contacto/entity/contacto.entity';
import { ContactoProductoModule } from './contacto_producto/contacto_producto.module';
import { ContactoProducto } from './contacto_producto/entity/contacto_producto.entity';
import { DireccionModule } from './direccion/direccion.module';
import { Direccion } from './direccion/entity/direccion.entity';
import { JWTGuard } from './guards/jwt.guard';
import { Pack } from './pack/entity/pack.entity';
import { PackModule } from './pack/pack.module';
import { Producto } from './productos/entity/producto.entity';
import { ProductosModule } from './productos/productos.module';
import { Region } from './region/entity/region.entity';
import { RegionModule } from './region/region.module';
import { Usuario } from './usuario/entity/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveStaticOptions: {
        redirect: false,
        index: false,
      },
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Producto,
        Carrito,
        Casa_cervecera,
        Contacto,
        Usuario,
        Region,
        Direccion,
        Comuna,
        Pack,
        ContactoProducto,
        Venta,
      ],
    }),
    ProductosModule,
    CarritoModule,
    CasaCerveceraModule,
    ContactoModule,
    UsuarioModule,
    RegionModule,
    DireccionModule,
    ComunaModule,
    PackModule,
    ContactoProductoModule,
    AbilityModule,
  ],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JWTGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AbilitiesGuard,
    },
  ],
})
export class AppModule {}
