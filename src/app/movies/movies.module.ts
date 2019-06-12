import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies.component';

@NgModule({
    declarations: [
        MoviesComponent,
        MovieDetailComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule
        
    ],
    exports: [],
    providers: [MovieService],
})
export class MoviesModule {}