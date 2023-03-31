import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-clients-page',
  templateUrl: './edit-clients-page.page.html',
  styleUrls: ['./edit-clients-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class EditClientsPagePage implements OnInit {

  element: any

  constructor(private router: Router) { }

  ngOnInit() {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    console.log(routerState);
    this.element = routerState;
  }
}
