import { Injectable } from '@nestjs/common';

@Injectable()
export class QuienesSomosService {
  private quienes_somos = [
    {
      quienes_somos: 'somos capital cervecera',
    },
  ];
}
