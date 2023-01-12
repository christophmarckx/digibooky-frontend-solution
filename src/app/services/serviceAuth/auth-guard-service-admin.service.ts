import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "../serviceLogin/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceAdminService implements CanActivate {

  constructor(private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    return this.authenticationService.isAdmin();
  }
}
