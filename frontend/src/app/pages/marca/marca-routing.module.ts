import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaPage } from './marca.page';

const routes: Routes = [
  {
    path: '',
    component: MarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcaPageRoutingModule {}
