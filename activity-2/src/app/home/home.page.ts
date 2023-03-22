import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  search() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      queryParams: { s: this.searchTerm },

    };
    this.router.navigate(['movies'], navigationExtras);
  }

}