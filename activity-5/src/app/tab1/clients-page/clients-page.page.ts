import { Component, OnInit } from '@angular/core';
import { NavigationExtras, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.page.html',
  styleUrls: ['./clients-page.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
})
export class ClientsPagePage implements OnInit {

  buttonPath = "/tabs/tab1/clients-page/edit-client-page"
  elements: any[] = [
    { "id": "1", "name": "Pedro Picapiedra", "description": "Con 24,3 MP, el sensor Exmor de fotograma completo y 35 mm de la α7 es equiparable al de las principales réflex. Y con el último procesador BIONZ X de Sony y un enfoque automático avanzado, la α7 ofrece una calidad, sensibilidad y nivel de detalle extraordinarios. Prepárate para un rendimiento que llevará tu fotografía a un nuevo nivel" },
    { "id": "2", "name": "Antonio Orozco", "description": "Nuestro Echo Dot con mejor calidad de sonido hasta la fecha: disfruta de un audio mejorado respecto al anterior Echo Dot con Alexa, con un sonido potente en cualquier habitación, con voces más nítidas y graves más intensos" },
    { "id": "3", "name": "Julián Álvarez", "description": "Nuestro Echo Dot con mejor calidad de sonido hasta la fecha: disfruta de un audio mejorado respecto al anterior Echo Dot con Alexa, con un sonido potente en cualquier habitación, con voces más nítidas y graves más intensos" },
  ]

  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl(id: number) {
    const actualElement = this.elements[id - 1];
    const navigationExtras: NavigationExtras = {
      state: {
        id: actualElement["id"],
        name: actualElement["name"],
        description: actualElement["description"],
      }
    }
    this.navCtrl.navigateForward(this.buttonPath, navigationExtras);
  }
  ngOnInit() {
  }

}
