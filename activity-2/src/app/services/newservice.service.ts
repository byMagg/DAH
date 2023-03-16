import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../models/MovieDetails';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  url = 'http://www.omdbapi.com/';
  apiKey = '95303372';

  constructor(private http: HttpClient) { }

  searchMovie(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(
      map((results: any) => results['Search'])
    );
  }

  searchMovieDetails(id: string) {
    return this.http.get<MovieDetails>(`${this.url}?i=${encodeURI(id)}&apikey=${this.apiKey}`);
  }

}