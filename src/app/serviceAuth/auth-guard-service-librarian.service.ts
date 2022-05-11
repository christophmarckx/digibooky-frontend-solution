import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceLibrarianService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    if (sessionStorage.getItem("role") == "librarian") {
      return true;
    }
    return false;
  }
}
