import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasaCerveceraController } from './casacervecera.controller';
import { CasaCerveceraService } from './casaservecera.service';
import { Casa_cervecera } from './entity/casacervecera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Casa_cervecera])],
  controllers: [CasaCerveceraController],
  providers: [CasaCerveceraService],
})
export class CasaCerveceraModule {}
