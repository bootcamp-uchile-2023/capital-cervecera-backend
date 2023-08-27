import { Module } from '@nestjs/common';
import { BuscadorController } from './buscador.controller';

@Module({
  controllers: [BuscadorController]
})
export class BuscadorModule {}
