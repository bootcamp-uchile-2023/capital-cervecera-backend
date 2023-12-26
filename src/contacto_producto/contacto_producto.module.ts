import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoProductoController } from './contacto_producto.controller';
import { ContactoProductoService } from './contacto_producto.service';
import { ContactoProducto } from './entity/contacto_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactoProducto])],
  controllers: [ContactoProductoController],
  providers: [ContactoProductoService],
})
export class ContactoProductoModule {}
