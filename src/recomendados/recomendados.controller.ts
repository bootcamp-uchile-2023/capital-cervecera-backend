import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecomendadosService } from './recomendados.service';
import { CreateRecomendadosDto } from './dto/recomendados-create.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('recomendados')
export class RecomendadosController {
  constructor(private readonly recomendadosService: RecomendadosService) {}
  @ApiBody({
    description:
      'Este  producto recomendado debe poseer los siguientes atributos',
    type: CreateRecomendadosDto,
  })
  @ApiResponse({
    status: 201,
    description: 'se registro con exito  ',
    type: CreateRecomendadosDto,
  })
  @Get()
  getAllRecomendados() {
    return this.recomendadosService.findAllRecomendados();
  }

  @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @Post()
  createRecomendados(@Body() createRecomendadosDto: CreateRecomendadosDto) {
    return createRecomendadosDto;
  }
}
