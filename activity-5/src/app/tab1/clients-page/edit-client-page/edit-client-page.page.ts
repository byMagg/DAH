import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-client-page',
  templateUrl: './edit-client-page.page.html',
  styleUrls: ['./edit-client-page.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class EditClientPagePage implements OnInit {

  element: any

  constructor(private router: Router) { }

  ngOnInit() {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    console.log(routerState);
    this.element = routerState;
  }

}
