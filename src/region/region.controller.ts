import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CreateRegionDto } from './dto/region-create.dto';
import { UpdateRegionDto } from './dto/region-update.dto';
import { RegionDto } from './dto/region.dto';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  @ApiOkResponse({
    description: 'regiones encontrados',
    type: RegionDto,
    isArray: true,
  })
  async getAllRegions(): Promise<RegionDto[]> {
    return await this.regionService.getAllRegions();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador de la  region que desea buscar',
  })
  @Get('region/:id')
  getRegionById(@Param('id') id: number) {
    return this.regionService.getRegionById(id);
  }

  @Post()
  @ApiBody({
    type: CreateRegionDto,
    description: 'Datos de la  region a crear',
  })
  @ApiCreatedResponse({
    description: 'La region se creó correctamente',
    type: RegionDto,
  })
  async create(@Body() createRegionDto: CreateRegionDto): Promise<RegionDto> {
    try {
      const resultado = await this.regionService.create(createRegionDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Region eliminada', type: RegionDto })
  @ApiNotFoundResponse({ description: 'No se encontró la region' })
  async remove(@Param('id') id: number): Promise<RegionDto> {
    try {
      const resultado = await this.regionService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateRegionDto,
    description: 'Datos de la region a actualizar',
  })
  @ApiOkResponse({ description: 'Region actualizada', type: RegionDto })
  @ApiNotFoundResponse({ description: 'No se encontró la region' })
  async update(
    @Param('id') id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ): Promise<RegionDto> {
    try {
      const resultado = await this.regionService.update(id, updateRegionDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
