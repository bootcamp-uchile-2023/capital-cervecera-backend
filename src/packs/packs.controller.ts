import { Body, Controller, Get, Post } from '@nestjs/common';
import { PacksService } from './packs.service';
import { PacksDto } from './dto/packs.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('packs')
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  @Get()
  getAllPacks() {
    return this.packsService.findAllPacks();
  }
}
