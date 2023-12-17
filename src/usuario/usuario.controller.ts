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

import { CheckAbilities } from 'src/ability/abilities.decorator';
import { AbilityFactory, Action } from 'src/ability/ability.factory';
import { Public } from 'src/guards/public.decorator';
import { CreateUsuarioDto } from './dto/usuario-create.dto';
import { UsuarioLoginDto } from './dto/usuario-login.dto';
import { UpdateUsuarioDto } from './dto/usuario-update.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entity/usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private abilityFactory: AbilityFactory,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'usuarios encontrados',
    type: UsuarioDto,
    isArray: true,
  })
  async getAllUsuarios(): Promise<UsuarioDto[]> {
    return await this.usuarioService.getAllUsuarios();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del usuario que desea buscar',
  })
  @Get(':id')
  getUsuarioById(@Param('id') id: number) {
    return this.usuarioService.getUsuarioById(id);
  }

  @Public()
  @Post('register')
  @ApiBody({
    type: CreateUsuarioDto,
    description: 'Datos del usuario a crear',
  })
  @ApiCreatedResponse({
    description: 'El usuario se creó correctamente',
    type: UsuarioDto,
  })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return this.usuarioService.create(createUsuarioDto);
    } catch (error) {}

    try {
      const resultado = await this.usuarioService.create(createUsuarioDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  @Public()
  @ApiBody({
    type: UsuarioLoginDto,
    description: 'Datos del usuario a logear',
  })
  @ApiCreatedResponse({
    description: 'El usuario se logeo correctamente',
    type: UsuarioLoginDto,
  })
  async login(@Body() usuarioLoginDto: UsuarioLoginDto) {
    try {
      const resultado = await this.usuarioService.login(usuarioLoginDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @CheckAbilities({ action: Action.Delete, subject: Usuario })
  @ApiOkResponse({ description: 'Usuario eliminado', type: UsuarioDto })
  @ApiNotFoundResponse({ description: 'No se encontró el usuario' })
  async remove(@Param('id') id: number): Promise<UsuarioDto> {
    try {
      const resultado = await this.usuarioService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Datos del usuario a actualizar',
  })
  @ApiOkResponse({ description: 'Usuario actualizado', type: UsuarioDto })
  @ApiNotFoundResponse({ description: 'No se encontró el usuario' })
  async update(
    @Param('id') id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioDto> {
    try {
      const resultado = await this.usuarioService.update(id, updateUsuarioDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
