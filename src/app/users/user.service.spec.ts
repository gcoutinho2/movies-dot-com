import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[LocalStorageService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
