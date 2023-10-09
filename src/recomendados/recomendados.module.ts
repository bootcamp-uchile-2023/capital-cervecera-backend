import { Module } from '@nestjs/common';
import { RecomendadosController } from './recomendados.controller';
import { RecomendadosService } from './recomendados.service';

@Module({
  controllers: [RecomendadosController],
  providers: [RecomendadosService],
})
export class RecomendadosModule {}
