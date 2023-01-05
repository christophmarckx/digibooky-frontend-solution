import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {Observable, tap} from "rxjs";
import {Login} from "../model/Login";
import {Member} from "../model/member";
import {MemberService} from "../serviceMember/member.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private loginService: LoginService, private memberService: MemberService) { }

  login(email: string, password: string): Observable<Login> {
    return this.loginService.login(email, password)
      .pipe(
        tap(login => {
          this.role = login.role;
          this.id = login.id;
          this.fullname = login.fullname;
          this.username = email;
          this.password = password;
        })
      );
  }

  addMember(member: Member) {
    return this.memberService.addMember(member)
      .pipe(
        tap(member => {
          this.id = member.id.toString();
          this.username = member.email;
          this.role = 'member';

        })
      )
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("email") != null;
  }

  public set username(email: string | null) {
    sessionStorage.setItem("email", email!)
  }

  public get username() {
    return sessionStorage.getItem("email")
  }

  private set fullname(fullname: string | null) {
    sessionStorage.setItem('fullname', fullname!);
  }

  public get fullname() {
    return sessionStorage.getItem('fullname')
  }

  public set id(id: string | null) {
    sessionStorage.setItem("id", id!)
  }

  public get id() {
    return sessionStorage.getItem("id")
  }

  public set role(role: string | null) {
    sessionStorage.setItem("role", role!);
  }

  public get role() {
    return sessionStorage.getItem("role");
  }

  logout() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("password");
  }

  private get password() {
    return sessionStorage.getItem("password");
  }

  private set password(password: string | null) {
    sessionStorage.setItem("password", password!)
  }

  getBasic() {
    return btoa(this.username + ":" + this.password);
  }

  isLibrarian() {
    return sessionStorage.getItem("role") == "librarian";
  }

  isAdmin() {
    return sessionStorage.getItem("role") == "admin";
  }

  isMember() {
    return sessionStorage.getItem("role") == "member";
  }
}
