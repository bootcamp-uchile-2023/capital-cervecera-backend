import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioMapper } from './mapper/usuario.mapper';

import { CreateUsuarioDto } from './dto/usuario-create.dto';
import { UpdateUsuarioDto } from './dto/usuario-update.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async getAllUsuarios(): Promise<UsuarioDto[]> {
    const resultado: Usuario[] = await this.usuarioRepository.find();

    return UsuarioMapper.toDtoList(resultado);
  }

  async getUsuarioById(id: number): Promise<UsuarioDto> {
    const resultado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return UsuarioMapper.toDto(resultado);
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDto> {
    const entidad: Usuario = UsuarioMapper.toEntity(createUsuarioDto);
    const resultado: Usuario = await this.usuarioRepository.save(entidad);

    return UsuarioMapper.toDto(resultado);
  }
  async remove(id: number): Promise<UsuarioDto> {
    const encontrado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el usuario');
    }
    await this.usuarioRepository.remove(encontrado);

    return UsuarioMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioDto> {
    const encontrado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el usuario');
    }

    if (updateUsuarioDto.password) {
      encontrado.password = updateUsuarioDto.password;
    }
    if (updateUsuarioDto.username) {
      encontrado.username = updateUsuarioDto.username;
    }

    const resultado: Usuario = await this.usuarioRepository.save(encontrado);

    return UsuarioMapper.toDto(resultado);
  }
}
