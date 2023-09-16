import { Module } from '@nestjs/common';
import { QuienesSomosController } from './quienes-somos.controller';
import { QuienesSomosService } from './quienes-somos.service';

@Module({
  controllers: [QuienesSomosController],
  providers: [QuienesSomosService],
})
export class QuienesSomosModule {}
