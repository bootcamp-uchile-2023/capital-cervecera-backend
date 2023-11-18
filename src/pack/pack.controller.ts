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
import { CreatePackDto } from './dto/pack-create.dto';
import { UpdatePackDto } from './dto/pack-update.dto';
import { PackDto } from './dto/pack.dto';
import { PackService } from './pack.service';

@Controller('pack')
export class PackController {
  constructor(private readonly packService: PackService) {}

  @Get()
  @ApiOkResponse({
    description: 'packs encontrados',
    type: PackDto,
    isArray: true,
  })
  async getAllPacks(): Promise<PackDto[]> {
    return await this.packService.getAllPacks();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del pack que desea buscar',
  })
  @Get('pack/:id')
  getPackById(@Param('id') id: number) {
    return this.packService.getPackById(id);
  }

  @Post()
  @ApiBody({
    type: CreatePackDto,
    description: 'Datos del pack a crear',
  })
  @ApiCreatedResponse({
    description: 'El pack se creó correctamente',
    type: PackDto,
  })
  async create(@Body() createPackDto: CreatePackDto): Promise<PackDto> {
    try {
      const resultado = await this.packService.create(createPackDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Pack eliminado', type: PackDto })
  @ApiNotFoundResponse({ description: 'No se encontró el pack' })
  async remove(@Param('id') id: number): Promise<PackDto> {
    try {
      const resultado = await this.packService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdatePackDto,
    description: 'Datos del pack a actualizar',
  })
  @ApiOkResponse({ description: 'Pack actualizado', type: PackDto })
  @ApiNotFoundResponse({ description: 'No se encontró el pack' })
  async update(
    @Param('id') id: number,
    @Body() updatePackDto: UpdatePackDto,
  ): Promise<PackDto> {
    try {
      const resultado = await this.packService.update(id, updatePackDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
