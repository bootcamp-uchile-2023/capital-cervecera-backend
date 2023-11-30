import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteProducto } from 'src/cliente_producto/entity/cliente_producto.entity';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { Cliente } from './entity/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ClienteProducto])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
