import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.page.html',
  styleUrls: ['./reservations-page.page.scss'],
})
export class ReservationsPagePage implements OnInit {

  elements: any[] = [
    { "id": "EL1", "name": "Element 1", "description": "Desc. of EL1" },
    { "id": "EL2", "name": "Element 2", "description": "Desc. of EL2" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
