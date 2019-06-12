import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

const APP_ROUTES: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'login', component: LoginComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);