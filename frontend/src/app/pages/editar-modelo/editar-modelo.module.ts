import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarModeloPageRoutingModule } from './editar-modelo-routing.module';

import { EditarModeloPage } from './editar-modelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarModeloPageRoutingModule
  ],
  declarations: [EditarModeloPage]
})
export class EditarModeloPageModule {}
