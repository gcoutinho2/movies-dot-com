import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../users/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedUser: boolean = false; 
  apiKey:string = 'localKey';

  menuViewEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  login(user: User) {
    let mockUser = this.getUser();
    let userLocal = this.getUserLocalStorage();

    if (user.email === mockUser.email && user.password === mockUser.password || 
      user.email === userLocal['email'] && user.password === userLocal['pass']) {
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
      id: 1,
      name: 'Zé',
      email: 'a',
      password: 'a'
    }
  }

  userAuthenticated() {
    return this.isAuthenticatedUser;
  }

  getUserLocalStorage() {
    return this.localStorage.get(this.apiKey);
  }

  
}

