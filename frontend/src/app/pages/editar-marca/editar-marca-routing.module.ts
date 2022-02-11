import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMarcaPage } from './editar-marca.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMarcaPageRoutingModule {}
