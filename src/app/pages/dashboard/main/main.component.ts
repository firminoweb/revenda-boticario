import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../../services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  compras: Array<any>;

  constructor(
    private comprasService: ComprasService
  ) { }

  ngOnInit() {
    this.compras = this.comprasService.pegarCompras();
  }

}
