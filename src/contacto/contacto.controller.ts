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
import { Public } from 'src/guards/public.decorator';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/contacto-create.dto';
import { UpdateContactoDto } from './dto/contacto-update.dto';
import { ContactoDto } from './dto/contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Public()
  @Get()
  @ApiOkResponse({
    description: 'contactos encontrados',
    type: ContactoDto,
    isArray: true,
  })
  async getAllContactos(): Promise<ContactoDto[]> {
    return await this.contactoService.getAllContactos();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del contacto que desea buscar',
  })
  @Get('contacto/:id')
  getContactoById(@Param('id') id: number) {
    return this.contactoService.getContactoById(id);
  }

  @Post()
  @ApiBody({
    type: CreateContactoDto,
    description: 'Datos del contacto a crear',
  })
  @ApiCreatedResponse({
    description: 'El contacto se creó correctamente',
    type: ContactoDto,
  })
  async create(
    @Body() createContactoDto: CreateContactoDto,
  ): Promise<ContactoDto> {
    try {
      const resultado = await this.contactoService.create(createContactoDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Contacto eliminado', type: ContactoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el contacto' })
  async remove(@Param('id') id: number): Promise<ContactoDto> {
    try {
      const resultado = await this.contactoService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateContactoDto,
    description: 'Datos del contacto a actualizar',
  })
  @ApiOkResponse({ description: 'Contacto actualizado', type: ContactoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el contacto' })
  async update(
    @Param('id') id: number,
    @Body() updateContactoDto: UpdateContactoDto,
  ): Promise<ContactoDto> {
    try {
      const resultado = await this.contactoService.update(
        id,
        updateContactoDto,
      );
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
