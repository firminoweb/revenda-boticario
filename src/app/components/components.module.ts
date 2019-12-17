import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToastComponent } from './toast/toast.component';

// Ng Bootstrap Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ToastComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ToastComponent
  ]
})
export class ComponentsModule { }
