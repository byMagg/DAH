import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.page.html',
  styleUrls: ['./products-page.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class ProductsPagePage implements OnInit {

  elements: any[] = [
    { "id": "1", "name": "Sony Alpha ILCE-7", "description": "Con 24,3 MP, el sensor Exmor de fotograma completo y 35 mm de la α7 es equiparable al de las principales réflex. Y con el último procesador BIONZ X de Sony y un enfoque automático avanzado, la α7 ofrece una calidad, sensibilidad y nivel de detalle extraordinarios. Prepárate para un rendimiento que llevará tu fotografía a un nuevo nivel" },
    { "id": "2", "name": "Echo Dot", "description": "Nuestro Echo Dot con mejor calidad de sonido hasta la fecha: disfruta de un audio mejorado respecto al anterior Echo Dot con Alexa, con un sonido potente en cualquier habitación, con voces más nítidas y graves más intensos" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
