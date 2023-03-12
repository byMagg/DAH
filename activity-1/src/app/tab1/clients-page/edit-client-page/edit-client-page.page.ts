import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client-page',
  templateUrl: './edit-client-page.page.html',
  styleUrls: ['./edit-client-page.page.scss'],
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
