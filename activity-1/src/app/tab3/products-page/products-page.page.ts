import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.page.html',
  styleUrls: ['./products-page.page.scss'],
})
export class ProductsPagePage implements OnInit {

  elements: any[] = [
    { "id": "EL1", "name": "Element 1", "description": "Desc. of EL1" },
    { "id": "EL2", "name": "Element 2", "description": "Desc. of EL2" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
