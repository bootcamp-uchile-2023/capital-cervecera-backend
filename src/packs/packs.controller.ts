import { Controller, Get, Post } from '@nestjs/common';
import { PacksService } from './packs.service';


@Controller('packs')
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  @Get()
  getAllPacks() {
    return this.packsService.findAllPacks();
  }
}
