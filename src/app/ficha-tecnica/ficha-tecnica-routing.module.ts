import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaTecnicaPage } from './ficha-tecnica.page';

const routes: Routes = [
  {
    path: '',
    component: FichaTecnicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaTecnicaPageRoutingModule {}
