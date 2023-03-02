import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  args: String | null = "";

  elements: any[] = [
    { "id": "EL1", "name": "Element 1", "description": "Desc. of EL1" },
    { "id": "EL2", "name": "Element 2", "description": "Desc. of EL2" }
  ]

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.args = this.activateRoute.snapshot.paramMap.get("elementid");
  }
}
