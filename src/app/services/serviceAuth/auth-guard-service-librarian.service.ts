import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "../serviceLogin/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceLibrarianService implements CanActivate {

  constructor(private auhtenticationService: AuthenticationService) { }

  canActivate(): boolean {
    return this.auhtenticationService.isLibrarian();
  }
}
