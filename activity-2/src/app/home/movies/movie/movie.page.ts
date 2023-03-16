import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieId: string | undefined
  details: Observable<any> | undefined;

  constructor(public newService: NewserviceService, public router: Router) {
    this.fetchDetails()
  }

  fetchDetails() {
    this.details = this.newService.searchMovieDetails(this.movieId!);
  }

  ngOnInit() {
  }

}
