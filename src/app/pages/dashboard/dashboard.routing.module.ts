import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    { path: 'cadastro-compras', loadChildren: () => import('./cadastro-compras/cadastro-compras.module').then(m => m.CadastroComprasModule) },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
