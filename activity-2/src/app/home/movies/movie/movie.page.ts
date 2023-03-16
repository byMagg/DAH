import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieId = "";
  details: MovieDetails | undefined;


  constructor(public newService: NewserviceService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['id'];
      this.fetchDetails(this.movieId)
    })
  }

  fetchDetails(movieId: string) {
    return this.newService.searchMovieDetails(movieId).subscribe((movie: MovieDetails) => {
      this.details = movie;
    })
  }

  ngOnInit() {
  }

}
