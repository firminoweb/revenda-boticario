import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComprasService {
  compras: Array<any> = [];

  pegarCompras() {
    return this.compras;
  }

  inserirCompras(compra) {
    this.compras.push(compra);
    return Promise.resolve();
  }

  deletarCompra(compra) {
    const index = this.compras.indexOf(compra);
    if (index > -1) {
      this.compras.splice(index, 1);
    }
    return Promise.resolve();
  }

}
