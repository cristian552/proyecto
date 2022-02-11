import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcaPageRoutingModule } from './marca-routing.module';

import { MarcaPage } from './marca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcaPageRoutingModule
  ],
  declarations: [MarcaPage]
})
export class MarcaPageModule {}
