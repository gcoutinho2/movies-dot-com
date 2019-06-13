import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '7922496fc80840aa7f6a9f82c8391c4d';


  private firstUrlDetail = 'https://api.themoviedb.org/3/movie/';
  private endUrlDetail = `?api_key=${this.apiKey}`;

  private genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
  private moviesByGenreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

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
