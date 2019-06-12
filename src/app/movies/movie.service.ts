import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '7922496fc80840aa7f6a9f82c8391c4d';

  private movieListUrl = `https://api.themoviedb.org/4/list/1?api_key=${this.apiKey}&page=`;

  private firstUrlDetail = 'https://api.themoviedb.org/3/movie/';
  private endUrlDetail = `?api_key=${this.apiKey}&language=en-US`;

  private genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
  private moviesByGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getMovies(page:number) {
    return this.http.get<any[]>(`${this.movieListUrl + page}`);
  }

  get(id:number){
    return this.http.get<any>(`${this.firstUrlDetail + id + this.endUrlDetail}`);
  }

  getGenres() {
    return this.http.get<any[]>(`${this.genresUrl}`);
  }

  listMoviesByGenre(id:string, page:number = 1) {
    return this.http.get<any[]>(`${this.moviesByGenreUrl}` + `&with_genres=` + id + `&page=` + page);
  }
}
