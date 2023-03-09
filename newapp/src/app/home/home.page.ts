import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewserviceService } from '../services/newservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  results: Observable<any> | undefined;

  constructor(private newService: NewserviceService) { }

  ngOnInit() {
    this.results = this.newService.searchMovie("Ant Man");
  }

}