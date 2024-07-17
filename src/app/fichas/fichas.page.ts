import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.page.html',
  styleUrls: ['./fichas.page.scss'],
})
export class FichasPage {

  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) { }

  goBack(){
    this.router.navigate(['/menu']);
  }

  navigateDataSheet(){
    this.router.navigate(['/ficha-tecnica']);
  }

}
