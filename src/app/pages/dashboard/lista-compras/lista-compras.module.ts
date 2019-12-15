import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaComprasComponent } from './lista-compras.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComprasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaComprasComponent]
})

export class ListaComprasModule { }
