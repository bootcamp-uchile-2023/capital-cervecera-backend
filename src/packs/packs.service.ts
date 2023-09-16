import { Injectable } from '@nestjs/common';

@Injectable()
export class PacksService {
  private packs = [
    {
      pack1: 'cerveza mas blabla',
    },
    {
      pack2: 'cervezita mas blabla',
    },
    {
      pack3: 'cervezota mas blabla',
    },
  ];
  findAllPacks() {
    return this.packs;
  }
}
