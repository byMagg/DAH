import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  searchTerm: string = '';
  results: Observable<any> | undefined;


  constructor(public newService: NewserviceService, public router: Router) { }

  searchChanged() {
    this.results = this.newService.searchMovie(this.searchTerm);
  }

  ngOnInit() {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    console.log(routerState);
    this.searchTerm = routerState!["input"]
    this.searchChanged()
  }

}
