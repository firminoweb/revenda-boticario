import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  currentUser: any;
  menuItems: any[];
  public isMenuCollapsed = true;

  constructor(
    private element: ElementRef,
    private router: Router,
    private authService: AuthService,
  ) {
    // this.sidebarVisible = false;
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;

    this.menuItems = [
      { path: '/dashboard', title: 'Dashboard',  icon: 'fa-tachometer-alt', class: '' },
      { path: '/dashboard/cadastro-compras', title: 'Cadastro de Compras',  icon: 'fa-file', class: '' },
      { path: '/dashboard/lista-compras', title: 'Lista de Compras',  icon: 'fa-list', class: '' }
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
  }

}
