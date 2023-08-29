import { Module } from '@nestjs/common';
import { AyudaController } from './ayuda.controller';

@Module({
  controllers: [AyudaController]
})
export class AyudaModule {}
