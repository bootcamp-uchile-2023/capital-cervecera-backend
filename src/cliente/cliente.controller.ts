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
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/cliente-create.dto';
import { UpdateClienteDto } from './dto/cliente-update.dto';
import { ClienteDto } from './dto/cliente.dto';
import { EstrellasCreateDto } from './dto/estrellas-create.dto';
import { Public } from 'src/guards/public.decorator';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Public()
  @Get()
  @ApiOkResponse({
    description: 'clientes encontrados',
    type: ClienteDto,
    isArray: true,
  })
  async getAllClientes(): Promise<ClienteDto[]> {
    return await this.clienteService.getAllClientes();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del cliente que desea buscar',
  })
  @Get('cliente/:id')
  getClienteById(@Param('id') id: number) {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  @ApiBody({
    type: CreateClienteDto,
    description: 'Datos del cliente a crear',
  })
  @ApiCreatedResponse({
    description: 'El cliente se creó correctamente',
    type: ClienteDto,
  })
  async create(
    @Body() createClienteDto: CreateClienteDto,
  ): Promise<ClienteDto> {
    try {
      const resultado = await this.clienteService.create(createClienteDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Cliente eliminado', type: ClienteDto })
  @ApiNotFoundResponse({ description: 'No se encontró el cliente' })
  async remove(@Param('id') id: number): Promise<ClienteDto> {
    try {
      const resultado = await this.clienteService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateClienteDto,
    description: 'Datos del cliente a actualizar',
  })
  @ApiOkResponse({ description: 'Cliente actualizado', type: ClienteDto })
  @ApiNotFoundResponse({ description: 'No se encontró el cliente' })
  async update(
    @Param('id') id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ): Promise<ClienteDto> {
    try {
      const resultado = await this.clienteService.update(id, updateClienteDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post('estrellas')
  @ApiBody({
    type: EstrellasCreateDto,
    description: 'Datos del cliente a crear',
  })
  @ApiCreatedResponse({
    description: 'El cliente se creó correctamente',
    type: EstrellasCreateDto,
  })
  async estrellasCreate(@Body() estrellasCreateDto: EstrellasCreateDto) {
    try {
      const resultado = await this.clienteService.estrellasCreate(
        estrellasCreateDto,
      );
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
