import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[RouterTestingModule]
  }));

  it('should be created', () => {
    const service: AuthGuard= TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
