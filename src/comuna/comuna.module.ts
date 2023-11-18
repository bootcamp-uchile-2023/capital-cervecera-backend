import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComunaController } from './comuna.controller';
import { ComunaService } from './comuna.service';
import { Comuna } from './entity/comuna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comuna])],
  controllers: [ComunaController],
  providers: [ComunaService],
})
export class ComunaModule {}
