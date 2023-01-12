import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceLibrarianService } from './auth-guard-service-librarian.service';

describe('AuthGuardServiceLibrarianService', () => {
  let service: AuthGuardServiceLibrarianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardServiceLibrarianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
