import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteProductoMapper } from './mapper/cliente_producto.mapper';

import { CreateClienteProductoDto } from './dto/cliente_producto-create.dto';
import { ClienteProductoDto } from './dto/cliente_producto.dto';
import { ClienteProducto } from './entity/cliente_producto.entity';

@Injectable()
export class ClienteProductoService {
  constructor(
    @InjectRepository(ClienteProducto)
    private cliente_productoRepository: Repository<ClienteProducto>,
  ) {}

  async getAllClienteProductos(): Promise<ClienteProductoDto[]> {
    const resultado: ClienteProducto[] =
      await this.cliente_productoRepository.find();

    return ClienteProductoMapper.toDtoList(resultado);
  }

  async create(
    createClienteProductoDto: CreateClienteProductoDto,
  ): Promise<ClienteProductoDto> {
    const entidad: ClienteProducto = ClienteProductoMapper.toEntity(
      createClienteProductoDto,
    );
    const resultado: ClienteProducto =
      await this.cliente_productoRepository.save(entidad);

    return ClienteProductoMapper.toDto(resultado);
  }
}
