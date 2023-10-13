import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecomendadosService } from './recomendados.service';
import { CreateRecomendadosDto } from './dto/recomendados-create.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('recomendados')
export class RecomendadosController {
  constructor(private readonly recomendadosService: RecomendadosService) {}
  @Get()
  getAllRecomendados() {
    return this.recomendadosService.getAllProductos();
  }

  @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @Post()
  createRecomendados(@Body() createRecomendadosDto: CreateRecomendadosDto) {
    return createRecomendadosDto;
  }
}
