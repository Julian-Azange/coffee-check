import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichasPage } from './fichas.page';

const routes: Routes = [
  {
    path: '',
    component: FichasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichasPageRoutingModule {}
