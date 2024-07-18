import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaracterizacionIaPage } from './caracterizacion-ia.page';

const routes: Routes = [
  {
    path: '',
    component: CaracterizacionIaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaracterizacionIaPageRoutingModule {}
