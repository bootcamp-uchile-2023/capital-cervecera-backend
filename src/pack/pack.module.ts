import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pack } from './entity/pack.entity';
import { PackController } from './pack.controller';
import { PackService } from './pack.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pack])],
  controllers: [PackController],
  providers: [PackService],
})
export class PackModule {}
