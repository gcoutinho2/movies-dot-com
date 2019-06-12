import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Array<any>;
  baseImg = 'https://image.tmdb.org/t/p/w300';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.list();
    console.log(this.baseImg);
  }

  list() {
    this.movieService.getMovies()
      .subscribe((data) => {
        console.log(data['results']);
        this.movies = data['results'];
      });
  }

}
