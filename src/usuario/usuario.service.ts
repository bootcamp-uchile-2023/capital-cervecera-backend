import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioMapper } from './mapper/usuario.mapper';

import { JwtService } from '@nestjs/jwt';
import * as Crypto from 'crypto';
import { CreateUsuarioDto } from './dto/usuario-create.dto';
import { UsuarioLoginDto } from './dto/usuario-login.dto';
import { UpdateUsuarioDto } from './dto/usuario-update.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entity/usuario.entity';

@Injectable()
export class UsuarioService {
  iv = Buffer.from('12772e44c172a6129f39cc89cc10aa4b', 'hex');
  modo = 'AES-256-CBC';
  password = 'cd1cb88ba31ce028d4816bfc88630771';
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
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

  async create(createUsuarioDto: CreateUsuarioDto) {
    const entidad: Usuario = UsuarioMapper.toEntity(createUsuarioDto);
    const encontrarUsuario: Usuario = await this.usuarioRepository.findOne({
      where: {
        username: createUsuarioDto.username,
      },
    });
    if (encontrarUsuario) {
      throw Error('TAS TISTE');
    }

    const cipher = Crypto.createCipheriv(
      this.modo,
      Buffer.from(this.password),
      this.iv,
    );
    const textoEncriptado = Buffer.concat([
      cipher.update(entidad.password),
      cipher.final(),
    ]);
    entidad.password = textoEncriptado.toString('hex');
    const resultado: Usuario = await this.usuarioRepository.save(entidad);

    return UsuarioMapper.toDto(resultado);
  }

  async login(usuarioLoginDto: UsuarioLoginDto) {
    const encontrarUsuario: Usuario = await this.usuarioRepository.findOne({
      where: {
        username: usuarioLoginDto.username,
      },
    });

    if (!encontrarUsuario) {
      throw Error('TAS TISTE');
    }

    const decipher = Crypto.createDecipheriv(
      this.modo,
      Buffer.from(this.password),
      this.iv,
    );
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encontrarUsuario.password, 'hex')),
      decipher.final(),
    ]);
    console.log(encontrarUsuario);
    const pswOriginal = decrypted.toString();

    if (usuarioLoginDto.password === pswOriginal) {
      const payload = {
        id: encontrarUsuario.id,
        username: usuarioLoginDto.username,
        isAdmin: encontrarUsuario.isAdmin,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    throw new BadRequestException();
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
