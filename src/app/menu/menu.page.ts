import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{

  searchControl = new FormControl();
  filteredItems: any[] = [];
  allItems: any[] = [];

  darkMode: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }



  navigateIA() {
    this.router.navigate(['/caracterizacion-ia']);
  }

  navigateDataSheet() {
    this.router.navigate(['/fichas']);
  }

  navigateValidation() {
    this.router.navigate(['/validacion']);
  }

  navigateRecomendations() {
    this.router.navigate(['/recomendaciones']);
  }

}
