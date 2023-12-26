import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { ProductosModule } from './productos/productos.module';

import { UsuarioModule } from './usuario/usuario.module';

import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { CarritoModule } from './carrito/carrito.module';
import { CasaCerveceraModule } from './casacervecera/casacervecera.module';
import { ComunaModule } from './comuna/comuna.module';
import { ContactoModule } from './contacto/contacto.module';
import { ContactoProductoModule } from './contacto_producto/contacto_producto.module';
import { DireccionModule } from './direccion/direccion.module';
import { PackModule } from './pack/pack.module';
import { RegionModule } from './region/region.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  // app.use(helmet());

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
      title: 'Carrito de Compra',
      description: 'Api de Carrito de Compra',
      version: '1.0',
      tag: 'carrito',
      route: 'api/carrito',
      module: CarritoModule,
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
      title: 'Casa Cervecera',
      description: 'Api de Casa Cervecera',
      version: '1.0',
      tag: 'casa',
      route: 'api/casa',
      module: CasaCerveceraModule,
    },

    {
      title: 'Casa Cervecera',
      description: 'Api de Contacto',
      version: '1.0',
      tag: 'contacto',
      route: 'api/contacto',
      module: ContactoModule,
    },
    {
      title: 'Casa Cervecera',
      description: 'Api de Region',
      version: '1.0',
      tag: 'region',
      route: 'api/region',
      module: RegionModule,
    },
    {
      title: 'Casa Cervecera',
      description: 'Api de Comuna',
      version: '1.0',
      tag: 'comuna',
      route: 'api/comuna',
      module: ComunaModule,
    },
    {
      title: 'Casa Cervecera',
      description: 'Api de Direccion',
      version: '1.0',
      tag: 'direccion',
      route: 'api/direccion',
      module: DireccionModule,
    },
    {
      title: 'Casa Cervecera',
      description: 'Api de Pack',
      version: '1.0',
      tag: 'pack',
      route: 'api/pack',
      module: PackModule,
    },
    {
      title: 'Casa Cervecera',
      description: 'Api de contacto_producto',
      version: '1.0',
      tag: 'contacto_producto',
      route: 'api/contacto_producto',
      module: ContactoProductoModule,
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
