import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ProductosModule } from './productos/productos.module';
import { QuienesSomosModule } from './quienes-somos/quienes-somos.module';
import { AyudaModule } from './ayuda/ayuda.module';
import { CarritoDeCompraModule } from './carrito-de-compra/carrito-de-compra.module';
import { UsuarioModule } from './usuario/usuario.module';
import { BuscadorModule } from './buscador/buscador.module';
import { PacksModule } from './packs/packs.module';
import { PromosModule } from './promos/promos.module';
import { RecomendadosModule } from './recomendados/recomendados.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      forbidNonWhitelisted: true,
    }),
  );

  const modules = [
    {
      title: 'Productos',
      description: 'Api de Productos',
      version: '1.0',
      tag: 'productos',
      route: 'api/productos',
      module: ProductosModule,
    },
    {
      title: 'Recomendados',
      description: 'Api de Recomendados',
      version: '1.0',
      tag: 'recomendados',
      route: 'api/recomendados',
      module: RecomendadosModule,
    },
    {
      title: 'Quiénes Somos',
      description: 'Api de Quiénes Somos',
      version: '1.0',
      tag: 'quienes-somos',
      route: 'api/quienes-somos',
      module: QuienesSomosModule,
    },
    {
      title: 'Ayuda',
      description: 'Api de Ayuda',
      version: '1.0',
      tag: 'ayuda',
      route: 'api/ayuda',
      module: AyudaModule,
    },
    {
      title: 'Carrito de Compra',
      description: 'Api de Carrito de Compra',
      version: '1.0',
      tag: 'carrito-de-compra',
      route: 'api/carrito-de-compra',
      module: CarritoDeCompraModule,
    },
    {
      title: 'Usuario',
      description: 'Api de Usuario',
      version: '1.0',
      tag: 'usuario',
      route: 'api/usuario',
      module: UsuarioModule,
    },
    {
      title: 'Buscador',
      description: 'Api de Buscador',
      version: '1.0',
      tag: 'buscador',
      route: 'api/buscador',
      module: BuscadorModule,
    },
    {
      title: 'Packs',
      description: 'Api de packs de productos',
      version: '1.0',
      tag: 'packs',
      route: 'api/packs',
      module: PacksModule,
    },
    {
      title: 'Promociones',
      description: 'Api de promociones',
      version: '1.0',
      tag: 'promos',
      route: 'api/promos',
      module: PromosModule,
    },
    {
      title: 'Suscripciones',
      description: 'Api de suscripciones',
      version: '1.0',
      tag: 'suscripciones',
      route: 'api/suscripciones',
      module: SuscripcionesModule,
    },
  ];

  for (const { title, description, version, tag, route, module } of modules) {
    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addTag(tag)
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      include: [module],
    });
    SwaggerModule.setup(route, app, document);
  }

  await app.listen(3000);
}

bootstrap();
