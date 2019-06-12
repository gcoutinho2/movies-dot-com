import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiKey:string = 'localKey';
  constructor(private localStorage: LocalStorageService) { }

  save(user: User) {
    return this.localStorage.set(this.apiKey, user)
  }

}
