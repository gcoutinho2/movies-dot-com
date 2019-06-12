import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MoviesModule } from './movies/movies.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersModule } from './users/users.module';


const appRoutes: Routes = [
  { 
    path: 'movies', 
    loadChildren: () => MoviesModule, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'users', 
    loadChildren: () => UsersModule
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
