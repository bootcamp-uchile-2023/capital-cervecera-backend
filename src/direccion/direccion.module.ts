import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';
import { Direccion } from './entity/direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  controllers: [DireccionController],
  providers: [DireccionService],
})
export class DireccionModule {}
