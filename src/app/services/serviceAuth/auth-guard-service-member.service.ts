import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "../serviceLogin/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceMemberService implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {
  }

  canActivate(): boolean {
    return this.authenticationService.isMember();
  }
}
