import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarOrdenPageRoutingModule } from './editar-orden-routing.module';

import { EditarOrdenPage } from './editar-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarOrdenPageRoutingModule
  ],
  declarations: [EditarOrdenPage]
})
export class EditarOrdenPageModule {}
