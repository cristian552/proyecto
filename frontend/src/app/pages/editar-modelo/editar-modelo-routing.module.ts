import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarModeloPage } from './editar-modelo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarModeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarModeloPageRoutingModule {}
