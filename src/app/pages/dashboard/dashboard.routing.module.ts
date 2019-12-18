import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', pathMatch: 'full', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    { path: 'cadastro-compras', loadChildren: () => import('./cadastro-compras/cadastro-compras.module').then(m => m.CadastroComprasModule) },
    { path: 'lista-compras', loadChildren: () => import('./lista-compras/lista-compras.module').then(m => m.ListaComprasModule) },
    { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
    { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
