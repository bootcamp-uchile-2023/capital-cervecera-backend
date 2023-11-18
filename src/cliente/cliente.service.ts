import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClienteDto } from './dto/cliente-create.dto';
import { UpdateClienteDto } from './dto/cliente-update.dto';
import { ClienteDto } from './dto/cliente.dto';
import { Cliente } from './entity/cliente.entity';
import { ClienteMapper } from './mapper/cliente.mapper';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async getAllClientes(): Promise<ClienteDto[]> {
    const resultado: Cliente[] = await this.clienteRepository.find({
      relations: {
        usuario: true,
        direccion: true,
      },
    });

    return ClienteMapper.toDtoList(resultado);
  }

  async getClienteById(id: number): Promise<ClienteDto> {
    const resultado: Cliente = await this.clienteRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        usuario: true,
        direccion: true,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return ClienteMapper.toDto(resultado);
  }

  async create(createClienteDto: CreateClienteDto): Promise<ClienteDto> {
    const entidad: Cliente = ClienteMapper.toEntity(createClienteDto);
    const resultado: Cliente = await this.clienteRepository.save(entidad);
    const resultadoWithRelation = await this.clienteRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        usuario: true,
        direccion: true,
      },
    });

    return ClienteMapper.toDto(resultadoWithRelation);
  }
  async remove(id: number): Promise<ClienteDto> {
    const encontrado: Cliente = await this.clienteRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el cliente');
    }
    await this.clienteRepository.remove(encontrado);
    return ClienteMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<ClienteDto> {
    const encontrado: Cliente = await this.clienteRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el cliente');
    }

    if (updateClienteDto.usuario_id) {
      encontrado.usuario_id = updateClienteDto.usuario_id;
    }
    if (updateClienteDto.direccion_id) {
      encontrado.direccion_id = updateClienteDto.direccion_id;
    }
    if (updateClienteDto.rut) {
      encontrado.rut = updateClienteDto.rut;
    }
    if (updateClienteDto.nombre) {
      encontrado.nombre = updateClienteDto.nombre;
    }
    if (updateClienteDto.esta_atento) {
      encontrado.esta_atento = updateClienteDto.esta_atento;
    }
    if (updateClienteDto.apellido_materno) {
      encontrado.apellido_materno = updateClienteDto.apellido_materno;
    }
    if (updateClienteDto.apellido_paterno) {
      encontrado.apellido_paterno = updateClienteDto.apellido_paterno;
    }
    if (updateClienteDto.url_imagen) {
      encontrado.url_imagen = updateClienteDto.url_imagen;
    }

    const resultado: Cliente = await this.clienteRepository.save(encontrado);
    const resultadoWithRelation = await this.clienteRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        usuario: true,
        direccion: true,
      },
    });
    return ClienteMapper.toDto(resultadoWithRelation);
  }
}
