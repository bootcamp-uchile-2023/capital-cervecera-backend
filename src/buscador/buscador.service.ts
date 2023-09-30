import { Injectable } from '@nestjs/common';

@Injectable()
export class BuscadorService {
  private buscador = [
    {
      buscar: 'buscar x cosas',
    },
  ];
}
