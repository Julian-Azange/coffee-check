import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'fichas',
    loadChildren: () => import('./fichas/fichas.module').then( m => m.FichasPageModule)
  },
  {
    path: 'ficha-tecnica',
    loadChildren: () => import('./ficha-tecnica/ficha-tecnica.module').then( m => m.FichaTecnicaPageModule)
  },
  {
    path: 'caracterizacion-ia',
    loadChildren: () => import('./caracterizacion-ia/caracterizacion-ia.module').then( m => m.CaracterizacionIaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
