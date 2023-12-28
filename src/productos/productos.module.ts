import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityModule } from 'src/ability/ability.module';
import { Producto } from './entity/producto.entity';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  imports: [AbilityModule, TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
