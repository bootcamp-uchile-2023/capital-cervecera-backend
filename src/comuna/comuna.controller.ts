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
import { ComunaService } from './comuna.service';
import { CreateComunaDto } from './dto/comuna-create.dto';
import { UpdateComunaDto } from './dto/comuna-update.dto';
import { ComunaDto } from './dto/comuna.dto';

@Controller('comuna')
export class ComunaController {
  constructor(private readonly comunaService: ComunaService) {}

  @Get()
  @ApiOkResponse({
    description: 'comunas encontradas',
    type: ComunaDto,
    isArray: true,
  })
  async getAllComunas(): Promise<ComunaDto[]> {
    return await this.comunaService.getAllComunas();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador de la comuna que desea buscar',
  })
  @Get('comuna/:id')
  getComunaById(@Param('id') id: number) {
    return this.comunaService.getComunaById(id);
  }

  @Post()
  @ApiBody({
    type: CreateComunaDto,
    description: 'Datos de la comuna a crear',
  })
  @ApiCreatedResponse({
    description: 'La comuna se creó correctamente',
    type: ComunaDto,
  })
  async create(@Body() createComunaDto: CreateComunaDto): Promise<ComunaDto> {
    try {
      const resultado = await this.comunaService.create(createComunaDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Comuna eliminada', type: ComunaDto })
  @ApiNotFoundResponse({ description: 'No se encontró la comuna' })
  async remove(@Param('id') id: number): Promise<ComunaDto> {
    try {
      const resultado = await this.comunaService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateComunaDto,
    description: 'Datos de la comuna a actualizar',
  })
  @ApiOkResponse({ description: 'Comuna actualizada', type: ComunaDto })
  @ApiNotFoundResponse({ description: 'No se encontró la comuna' })
  async update(
    @Param('id') id: number,
    @Body() updateComunaDto: UpdateComunaDto,
  ): Promise<ComunaDto> {
    try {
      const resultado = await this.comunaService.update(id, updateComunaDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
