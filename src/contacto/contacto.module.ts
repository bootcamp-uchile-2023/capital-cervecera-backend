import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoProducto } from 'src/contacto_producto/entity/contacto_producto.entity';
import { ContactoController } from './contacto.controller';
import { ContactoService } from './contacto.service';
import { Contacto } from './entity/contacto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacto, ContactoProducto])],
  controllers: [ContactoController],
  providers: [ContactoService],
})
export class ContactoModule {}
