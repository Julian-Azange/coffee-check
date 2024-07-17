import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaTecnicaPageRoutingModule } from './ficha-tecnica-routing.module';

import { FichaTecnicaPage } from './ficha-tecnica.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaTecnicaPageRoutingModule
  ],
  declarations: [FichaTecnicaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FichaTecnicaPageModule {}
