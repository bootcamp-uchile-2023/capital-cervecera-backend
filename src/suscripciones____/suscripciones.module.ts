import { Module } from '@nestjs/common';
import { PacksController } from '../packs/packs.controller';
import { PacksService } from '../packs/packs.service';

@Module({
  controllers: [PacksController],
  providers: [PacksService],
})
export class SuscripcionesModule {}
