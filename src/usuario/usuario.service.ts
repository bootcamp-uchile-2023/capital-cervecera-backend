import { BadRequestException, Injectable, Logger } from '@nestjs/common';

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
  private readonly logger = new Logger(UsuarioService.name);

  iv = Buffer.from(process.env.PASSWORD_CRYPT_IV, 'hex');
  modo = 'AES-256-CBC';
  password = process.env.PASSWORD_CRYPT;
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async getAllUsuarios(): Promise<UsuarioDto[]> {
    this.logger.log('buscando usuarios en la BD');

    const resultado: Usuario[] = await this.usuarioRepository.find();

    return UsuarioMapper.toDtoList(resultado);
  }

  async getUsuarioById(id: number): Promise<UsuarioDto> {
    this.logger.log('buscando usuario por su ID en BD');

    const resultado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      this.logger.fatal('no se encontro el usuario en la BD');

      throw new BadRequestException();
    }
    return UsuarioMapper.toDto(resultado);
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    this.logger.debug('creando usuario en la BD ');
    const entidad: Usuario = UsuarioMapper.toEntity(createUsuarioDto);
    this.logger.debug('Buscando que no exista en la BD');
    const encontrarUsuario: Usuario = await this.usuarioRepository.findOne({
      where: {
        username: createUsuarioDto.username,
      },
    });
    if (encontrarUsuario) {
      this.logger.warn('ya existe ese usuario');
      throw Error();
    }

    this.logger.debug('cifrando el usuario ');
    const cipher = Crypto.createCipheriv(
      this.modo,
      Buffer.from(this.password),
      this.iv,
    );

    this.logger.debug('encriptando el usuario');
    const textoEncriptado = Buffer.concat([
      cipher.update(entidad.password),
      cipher.final(),
    ]);
    this.logger.debug('encriptando contraseña');
    entidad.password = textoEncriptado.toString('hex');
    this.logger.debug('guardando el nuevo usuario ');
    const resultado: Usuario = await this.usuarioRepository.save(entidad);

    return UsuarioMapper.toDto(resultado);
  }

  async login(usuarioLoginDto: UsuarioLoginDto) {
    this.logger.debug('Buscando el usuario en la base de datos');
    const encontrarUsuario: Usuario = await this.usuarioRepository.findOne({
      where: {
        username: usuarioLoginDto.username,
      },
    });

    if (!encontrarUsuario) {
      this.logger.error('aca no se encontro el usuario ');
      throw Error();
    }

    const decipher = Crypto.createDecipheriv(
      this.modo,
      Buffer.from(this.password),
      this.iv,
    );
    this.logger.debug('decifrando contraseña');
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encontrarUsuario.password, 'hex')),
      decipher.final(),
    ]);
    this.logger.debug('desencriptando la contraseña de la BD ');

    const pswOriginal = decrypted.toString();
    this.logger.debug('desencriptando la contraseña de la BD ');

    if (usuarioLoginDto.password === pswOriginal) {
      this.logger.debug('comparando contraseñas ');
      const payload = {
        id: encontrarUsuario.id,
        username: usuarioLoginDto.username,
        isAdmin: encontrarUsuario.isAdmin,
      };
      this.logger.log('contraseñas iguales ');
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    this.logger.fatal('no coincide la contraseña ');
    throw new BadRequestException();
  }

  async remove(id: number): Promise<UsuarioDto> {
    this.logger.debug('buscando usuario por su ID');

    const encontrado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      this.logger.log('no se encontro el usuario');

      throw Error();
    }
    await this.usuarioRepository.remove(encontrado);
    this.logger.log('usuario encontrado');

    return UsuarioMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioDto> {
    this.logger.debug('buscando usuario para actualizar');

    const encontrado: Usuario = await this.usuarioRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      this.logger.fatal('no se encontro el usuario');

      throw Error();
    }

    if (updateUsuarioDto.password) {
      encontrado.password = updateUsuarioDto.password;
    }
    if (updateUsuarioDto.username) {
      encontrado.username = updateUsuarioDto.username;
    }
    this.logger.debug('guardando actualizacion en la BD');

    const resultado: Usuario = await this.usuarioRepository.save(encontrado);

    return UsuarioMapper.toDto(resultado);
  }
}
