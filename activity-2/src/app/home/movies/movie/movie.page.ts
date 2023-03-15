import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie: string


  constructor(public router: Router) {
    const routerState = this.router.getCurrentNavigation()?.extras.state;
    this.movie = routerState!["data"]
    this.parseData(this.movie)
    console.log(this.movie)
  }

  parseData(data: string) {
    // console.log(data)
    // console.log(typeof JSON.parse(data))
    // console.log(data["title"])
  }


  ngOnInit() {
  }

}
