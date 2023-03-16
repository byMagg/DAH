import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from 'src/app/models/Movie';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  searchTerm: string = '';
  movies: Observable<Movie[]> | undefined;
  movie: string | undefined

  constructor(public newService: NewserviceService, public router: Router) {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    console.log(routerState);
    this.searchTerm = routerState!["input"]
    this.searchChanged()
  }

  searchChanged() {
    this.movies = this.newService.searchMovies(this.searchTerm);
  }

  ngOnInit() {

  }

}
