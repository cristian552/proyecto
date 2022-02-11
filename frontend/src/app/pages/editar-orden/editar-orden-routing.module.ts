import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarOrdenPage } from './editar-orden.page';

const routes: Routes = [
  {
    path: '',
    component: EditarOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarOrdenPageRoutingModule {}
