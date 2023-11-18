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
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CasaCerveceraService } from './casaservecera.service';
import { CreateCasaCerveceraDto } from './dto/casacervecera-create.dto';
import { UpdateCasaCerveceraDto } from './dto/casacervecera-update.dto';
import { CasaCerveceraDto } from './dto/casacervecera.dto';

@Controller('casa_cervecera')
export class CasaCerveceraController {
  constructor(private readonly casacerveceraService: CasaCerveceraService) {}

  @Get()
  @ApiOkResponse({
    description: 'Carritos encontrados',
    type: CasaCerveceraDto,
    isArray: true,
  })
  async getAllCasas(): Promise<CasaCerveceraDto[]> {
    return await this.casacerveceraService.getAllCasas();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador de la casa cervecera que desea buscar',
  })
  @Get('casacervecera/:id')
  getCasaById(@Param('id') id: number) {
    return this.casacerveceraService.getCasaById(id);
  }

  @Post()
  @ApiBody({
    type: CreateCasaCerveceraDto,
    description: 'Datos de la casa cervecera  a crear',
  })
  @ApiBadRequestResponse({
    description: 'Ya existe una casa cervecera con ese nombre',
  })
  @ApiCreatedResponse({
    description: 'La casa cervecera se creó correctamente',
    type: CasaCerveceraDto,
  })
  async create(
    @Body() createCasaCerveceraDto: CreateCasaCerveceraDto,
  ): Promise<CasaCerveceraDto> {
    try {
      const resultado = await this.casacerveceraService.create(
        createCasaCerveceraDto,
      );
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Casa cervecera eliminada',
    type: CasaCerveceraDto,
  })
  @ApiNotFoundResponse({ description: 'No se encontró la casa cervecera' })
  async remove(@Param('id') id: number): Promise<CasaCerveceraDto> {
    try {
      const resultado = await this.casacerveceraService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateCasaCerveceraDto,
    description: 'Datos de la casa cervecera a actualizar',
  })
  @ApiOkResponse({
    description: 'Casa cervecera actualizada',
    type: CasaCerveceraDto,
  })
  @ApiNotFoundResponse({ description: 'No se encontró la casa cervecera' })
  async update(
    @Param('id') id: number,
    @Body() updateCasaCerveceraDto: UpdateCasaCerveceraDto,
  ): Promise<CasaCerveceraDto> {
    try {
      const resultado = await this.casacerveceraService.update(
        id,
        updateCasaCerveceraDto,
      );
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
