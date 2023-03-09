import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any> | undefined;

  constructor(public newService: NewserviceService) { }

  ngOnInit() {
    this.results = this.newService.searchMovie("Jurassic Park");
  }

}