import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesModule } from './movies/movies.module';


const appRoutes: Routes = [
  { path: 'movies', loadChildren: () => MoviesModule },
  { path: 'users', loadChildren: () => UsersModule },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
