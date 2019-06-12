import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.inscription = this.route.params
      .subscribe((params: any) => {
        this.id = params['id'];

        this.getMovie(this.id);
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();    
  }

  getMovie(id:number) {
    this.movieService.get(id)
    .subscribe((data) => {
      console.log(data);
      this.movie = data;
    });
  }

}
