import { Module } from '@nestjs/common';
import { AyudaController } from './ayuda.controller';
import { AyudaService } from './ayuda.service';

@Module({
  controllers: [AyudaController],
  providers: [AyudaService],
})
export class AyudaModule {}
