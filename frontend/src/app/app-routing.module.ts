import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'marca',
    loadChildren: () => import('./pages/marca/marca.module').then( m => m.MarcaPageModule)
  },
  {
    path: 'modelo',
    loadChildren: () => import('./pages/modelo/modelo.module').then( m => m.ModeloPageModule)
  },
  {
    path: 'editar-cliente',
    loadChildren: () => import('./pages/editar-cliente/editar-cliente.module').then( m => m.EditarClientePageModule)
  },
  {
    path: 'editar-marca',
    loadChildren: () => import('./pages/editar-marca/editar-marca.module').then( m => m.EditarMarcaPageModule)
  },
  {
    path: 'editar-modelo',
    loadChildren: () => import('./pages/editar-modelo/editar-modelo.module').then( m => m.EditarModeloPageModule)
  },
  {
    path: 'orden',
    loadChildren: () => import('./pages/orden/orden.module').then( m => m.OrdenPageModule)
  },
  {
    path: 'editar-orden',
    loadChildren: () => import('./pages/editar-orden/editar-orden.module').then( m => m.EditarOrdenPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
