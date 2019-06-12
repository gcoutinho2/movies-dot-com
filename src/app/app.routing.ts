import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

const APP_ROUTES: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);