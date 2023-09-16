import { Body, Controller, Get, Post } from '@nestjs/common';
import { PacksService } from './packs.service';
import { CreatePacksDto } from './dto/create-packs.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('packs')
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  @ApiBody({
    description: 'Este producto debe poseer los siguientes atributos',
    type: CreatePacksDto,
  })
  @ApiResponse({
    status: 201,
    description: 'se registro con exito  ',
    type: CreatePacksDto,
  })
  @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @Post()
  createPacks(@Body() createPacksDto: CreatePacksDto) {
    return createPacksDto;
  }

  @Get()
  getAllPacks() {
    return this.packsService.findAllPacks();
  }
}
