import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComprasComponent } from './cadastro-compras.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComprasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroComprasComponent]
})

export class CadastroComprasModule { }
