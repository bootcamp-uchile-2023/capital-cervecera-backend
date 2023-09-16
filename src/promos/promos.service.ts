import { Injectable } from '@nestjs/common';

@Injectable()
export class PromosService {
  private promos = [
    {
      producto: 'pilsen',
      descuento: 10,
    },
    {
      producto: 'kunstman',
      descuento: 5,
    },
    {
      producto: 'corona',
      descuento: 15,
    },
  ];

  findAllPromos() {
    return this.promos;
  }
}
