import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceAdminService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    if (sessionStorage.getItem("role") == "admin") {
      return true;
    }
    return false;
  }
}
