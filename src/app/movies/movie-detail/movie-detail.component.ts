import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  inscription: Subscription;
  movie: any;
  baseImg = 'https://image.tmdb.org/t/p/w1280';

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
  ) {}

  ngOnInit() {
   return this.inscription = this.route.params
      .subscribe((params: any) => {
        this.id = params['id'];

        this.getMovie(this.id);
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();    
  }

  getMovie(id:number) {
    return this.movieService.get(id)
      .subscribe((data) => this.movie = data);
  }

}
