import { Injectable } from '@angular/core';
import compras from './mock-compras';

@Injectable({
  providedIn: 'root'
})

export class ComprasService {
  compras: Array<any> = compras;

  getAll() {
    return Promise.resolve(compras);
  }

  pegarCompras() {
    return this.compras;
  }

  inserirCompras(compra) {
    this.compras.push(compra);
    return Promise.resolve();
  }

}
