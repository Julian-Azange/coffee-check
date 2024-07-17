import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichasPageRoutingModule } from './fichas-routing.module';

import { FichasPage } from './fichas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichasPageRoutingModule
  ],
  declarations: [FichasPage]
})
export class FichasPageModule {}
