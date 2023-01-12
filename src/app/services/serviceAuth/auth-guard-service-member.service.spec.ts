import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceMemberService } from './auth-guard-service-member.service';

describe('AuthGuardServiceMemberService', () => {
  let service: AuthGuardServiceMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardServiceMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
