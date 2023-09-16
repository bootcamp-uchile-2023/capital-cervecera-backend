import { Body, Controller, Get, Post } from '@nestjs/common';
import { PromosService } from './promos.service';
import { CreatePromoDto } from './dto/create-promo.dto';
import { ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('promos')
export class PromosController {
  constructor(private readonly promosService: PromosService) {}
  @ApiResponse({
    status: 201,
    description: 'se registro con exito  ',
    type: CreatePromoDto,
  })
  @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @ApiBody({
    description: 'Este producto debe poseer los siguientes atributos',
    type: CreatePromoDto,
  })
  @Post()
  createPromos(@Body() createPromoDto: CreatePromoDto) {
    return createPromoDto;
  }
  @Get()
  getAllPromos() {
    return this.promosService.findAllPromos();
  }
}
