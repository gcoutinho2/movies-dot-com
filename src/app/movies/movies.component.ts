import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Array<any>;
  genres: Array<any>;
  baseImg = 'https://image.tmdb.org/t/p/w400';
  totalPages: number;
  page: number = 1;
  isViewGenres: boolean = true;
  genreId: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //this.list();
    this.listGenres();
  }

  list(page: number = 1) {
    this.movieService.getMovies(page)
      .subscribe((data) => {
        this.totalPages = data['total_pages'];
        this.movies = data['results'];
      });
  }

  pagination(isNext: boolean) {
    if (isNext && this.totalPages != this.page) this.page++;

    if (!isNext && this.page > 1) this.page--;

    this.getFilter(this.genreId, this.page);
  }

  listGenres() {
    this.movieService.getGenres()
      .subscribe((data) => {
        this.genres = data['genres'];
      });
  }

  getFilter(id:string, page:number = 1){
    this.movieService.listMoviesByGenre(id, page)
    .subscribe((data) => {
      this.genreId = id;
      this.totalPages = data['total_pages'];
      this.movies = data['results'];
    });
  }

  setVisibleGenres(){
    return this.isViewGenres = !this.isViewGenres;
  }
  

}
