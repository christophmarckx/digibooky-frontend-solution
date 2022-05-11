import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceMemberService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    if (sessionStorage.getItem("role") == "member") {
      return true;
    }
    return false;
  }
}
