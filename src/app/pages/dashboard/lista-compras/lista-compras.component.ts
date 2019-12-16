import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../../services';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})

export class ListaComprasComponent implements OnInit {
  compras: Array<any>;

  constructor(
    private comprasService: ComprasService
  ) { }

  ngOnInit() {
    this.compras = this.comprasService.pegarCompras();
  }

}
