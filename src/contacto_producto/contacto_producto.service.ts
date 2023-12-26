import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactoProductoMapper } from './mapper/contacto_producto.mapper';

import { CreateContactoProductoDto } from './dto/contacto_producto-create.dto';
import { ContactoProductoDto } from './dto/contacto_producto.dto';
import { ContactoProducto } from './entity/contacto_producto.entity';

@Injectable()
export class ContactoProductoService {
  constructor(
    @InjectRepository(ContactoProducto)
    private contacto_productoRepository: Repository<ContactoProducto>,
  ) {}

  async getAllContactoProductos(): Promise<ContactoProductoDto[]> {
    const resultado: ContactoProducto[] =
      await this.contacto_productoRepository.find();

    return ContactoProductoMapper.toDtoList(resultado);
  }

  async create(
    createContactoProductoDto: CreateContactoProductoDto,
  ): Promise<ContactoProductoDto> {
    const entidad: ContactoProducto = ContactoProductoMapper.toEntity(
      createContactoProductoDto,
    );
    const resultado: ContactoProducto =
      await this.contacto_productoRepository.save(entidad);

    return ContactoProductoMapper.toDto(resultado);
  }
}
