import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    private element: ElementRef,
    private router: Router
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
  }


  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
  }

}
