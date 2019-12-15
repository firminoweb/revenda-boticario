import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'fa-tachometer-alt', class: '' },
  { path: '/cadastro-compras', title: 'Cadastro de Compras',  icon: 'fa-file', class: '' },
  { path: '/lista-compras', title: 'Lista de Compras',  icon: 'fa-list', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems);
  }

  isMobileMenu() {
  }
}
