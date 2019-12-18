import { Component, OnInit } from '@angular/core';
import { ComprasService, CashbackService, AuthService } from '../../../services';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})

export class ListaComprasComponent implements OnInit {
  compras: Array<any>;
  cashback: any;
  currentUser: any;


  constructor(
    private comprasService: ComprasService,
    private cashbackService: CashbackService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUserValue;
    this.compras = this.comprasService.pegarCompras();
  }

  ngOnInit() {
    this.cashbackService.getCashback(this.currentUser.cpf).subscribe(cashback => {
      this.cashback = cashback.body;
    });
  }

  deletarCompra(compra) {
    this.comprasService.deletarCompra(compra).then(() => {
      console.log('Compra deletada: ', compra);
    });
  }

}
