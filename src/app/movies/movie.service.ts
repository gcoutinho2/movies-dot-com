import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieListUrl = 'https://api.themoviedb.org/4/list/1?page=1&api_key=7922496fc80840aa7f6a9f82c8391c4d';

  private firstUrlDetail = 'https://api.themoviedb.org/3/movie/';
  private endUrlDetail = '?api_key=7922496fc80840aa7f6a9f82c8391c4d&language=en-US';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any[]>(`${this.movieListUrl}`);
  }

  get(id:number){
    let url = this.firstUrlDetail + id + this.endUrlDetail;
    console.log(url);
    return this.http.get<any>(`${this.firstUrlDetail + id + this.endUrlDetail}`);
  }
}
