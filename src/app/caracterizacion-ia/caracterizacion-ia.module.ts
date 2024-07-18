import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaracterizacionIaPageRoutingModule } from './caracterizacion-ia-routing.module';

import { CaracterizacionIaPage } from './caracterizacion-ia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaracterizacionIaPageRoutingModule,
  ],
  declarations: [CaracterizacionIaPage]
})
export class CaracterizacionIaPageModule {}
