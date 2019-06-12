import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedUser: boolean = false; 

  menuViewEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    let mockUser = this.getUser();

    if (user.email === mockUser.email && user.password === mockUser.password) {
      this.isAuthenticatedUser = true;

      this.menuViewEmitter.emit(true);

      this.router.navigate(['/movies'])
    } else {
      this.logout();

      alert('Usuário/senha inválidos');
    }
  }

  logout() {
    this.isAuthenticatedUser = false;
    this.menuViewEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {
      name: 'Zé',
      email: 'a',
      password: 'a'
    }
  }

  userAuthenticated() {
    return this.isAuthenticatedUser;
  }

  
}

