import { Module } from '@nestjs/common';
import { QuienesSomosController } from './quienes-somos.controller';

@Module({
  controllers: [QuienesSomosController]
})
export class QuienesSomosModule {}
