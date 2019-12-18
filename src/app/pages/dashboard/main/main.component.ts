import { Component, OnInit } from '@angular/core';

import { ComprasService, CashbackService, AuthService } from '../../../services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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

}
