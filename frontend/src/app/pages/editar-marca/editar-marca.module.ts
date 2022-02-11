import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMarcaPageRoutingModule } from './editar-marca-routing.module';

import { EditarMarcaPage } from './editar-marca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMarcaPageRoutingModule
  ],
  declarations: [EditarMarcaPage]
})
export class EditarMarcaPageModule {}
