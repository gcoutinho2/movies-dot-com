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
  totalPages:number;
  page: number = 1; 

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.list();
  }

  list(page:number = 1) {
    this.movieService.getMovies(page)
      .subscribe((data) => {
        console.log(data['results']);
        this.totalPages = data['total_pages'];
        this.movies = data['results'];
      });
  }

  pagination(isNext:boolean) {
    if (isNext && this.totalPages != this.page) this.page++;
    
    if (!isNext && this.page > 1) this.page--;

    this.list(this.page);
  }

}
