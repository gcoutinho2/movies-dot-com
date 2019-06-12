import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'https://api.themoviedb.org/4/list/1?page=1&api_key=7922496fc80840aa7f6a9f82c8391c4d';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any[]>(`${this.movieUrl}`);
  }
}
