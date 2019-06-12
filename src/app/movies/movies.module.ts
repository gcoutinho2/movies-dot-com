import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
    declarations: [
        MoviesComponent,
        MovieDetailComponent,
    ],
    imports: [ 
        CommonModule,
        MoviesRoutingModule
    ],
    exports: [],
    providers: [MovieService],
})
export class MoviesModule {}