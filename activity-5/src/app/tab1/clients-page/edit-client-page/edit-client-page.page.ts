import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-client-page',
  templateUrl: './edit-client-page.page.html',
  styleUrls: ['./edit-client-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class EditClientPagePage implements OnInit {

  element: any | undefined

  constructor(private router: Router) { }

  ngOnInit() {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    console.log(routerState);
    this.element = routerState;
  }

}
