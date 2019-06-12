import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';


const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
