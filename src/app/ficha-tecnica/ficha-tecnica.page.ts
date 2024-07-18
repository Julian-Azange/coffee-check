import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.page.html',
  styleUrls: ['./ficha-tecnica.page.scss'],
})
export class FichaTecnicaPage {

  constructor(
    private router: Router,
  ) { }

  goBack(){
    this.router.navigate(['/fichas']);
  }

}
