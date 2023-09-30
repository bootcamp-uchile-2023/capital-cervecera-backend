import { Injectable } from '@nestjs/common';

@Injectable()
export class RecomendadosService {
  private recomendados = [
    {
      nombre: 'Pilsen',
      estrellas: 3,
      precio_compra: 1000,
    },
    {
      nombre: 'Corona',
      estrellas: 4,
      precio_compra: 2000,
    },
    {
      nombre: 'Kunstman',
      estrellas: 5,
      precio_compra: 2500,
    },
  ];

  findAllRecomendados() {
    return this.recomendados;
  }
  getRecomendadoByName(nombre: string) {
    return this.recomendados.find(
      (recomendados) => recomendados.nombre === nombre,
    );
  }
}
