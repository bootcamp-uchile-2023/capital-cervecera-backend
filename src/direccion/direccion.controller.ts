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
import { DireccionService } from './direccion.service';
import { CreateDireccionDto } from './dto/direccion-create.dto';
import { UpdateDireccionDto } from './dto/direccion-update.dto';
import { DireccionDto } from './dto/direccion.dto';

@Controller('direccion')
export class DireccionController {
  constructor(private readonly direccionService: DireccionService) {}

  @Get()
  @ApiOkResponse({
    description: 'direcciones encontradas',
    type: DireccionDto,
    isArray: true,
  })
  async getAllDireccions(): Promise<DireccionDto[]> {
    return await this.direccionService.getAllDireccions();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador de la direccion que desea buscar',
  })
  @Get('direccion/:id')
  getDireccionById(@Param('id') id: number) {
    return this.direccionService.getDireccionById(id);
  }

  @Post()
  @ApiBody({
    type: CreateDireccionDto,
    description: 'Datos de la direccion a crear',
  })
  @ApiCreatedResponse({
    description: 'La direccion se creó correctamente',
    type: DireccionDto,
  })
  async create(
    @Body() createDireccionDto: CreateDireccionDto,
  ): Promise<DireccionDto> {
    try {
      const resultado = await this.direccionService.create(createDireccionDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Direccion eliminada', type: DireccionDto })
  @ApiNotFoundResponse({ description: 'No se encontró la direccion' })
  async remove(@Param('id') id: number): Promise<DireccionDto> {
    try {
      const resultado = await this.direccionService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateDireccionDto,
    description: 'Datos de la direccion a actualizar',
  })
  @ApiOkResponse({ description: 'Direccion actualizada', type: DireccionDto })
  @ApiNotFoundResponse({ description: 'No se encontró la direccion' })
  async update(
    @Param('id') id: number,
    @Body() updateDireccionDto: UpdateDireccionDto,
  ): Promise<DireccionDto> {
    try {
      const resultado = await this.direccionService.update(
        id,
        updateDireccionDto,
      );
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
