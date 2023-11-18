import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteProductoController } from './cliente_producto.controller';
import { ClienteProductoService } from './cliente_producto.service';
import { ClienteProducto } from './entity/cliente_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteProducto])],
  controllers: [ClienteProductoController],
  providers: [ClienteProductoService],
})
export class ClienteProductoModule {}
