import {Injectable} from '@angular/core';
import {LoginService} from "./login.service";
import {BehaviorSubject, map, mergeMap, Observable, Subject, tap} from "rxjs";
import {MemberService} from "../serviceMember/member.service";
import {User} from "../../model/User";
import {Role} from "../../model/Login";
import {Member} from "../../model/Member";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user$ = new BehaviorSubject<User>(this.user);

  constructor(private loginService: LoginService, private memberService: MemberService) {
  }

  login(email: string, password: string): Observable<User> {
    return this.loginService.login(email, password)
      .pipe(
        tap(login => {
          this.role = login.role;
          this.id = login.id;
          this.fullname = login.fullname;
          this.username = email;
          this.password = password;
          this.user$.next(this.user);
        }),
        map(() => this.user)
      );
  }

  get user() {
    return new User(this.id!, this.fullname!, Role[this.role as keyof typeof Role]);
  }

  addMember(member: Member) {
    return this.memberService.addMember(member);
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

  private set role(role: string | null) {
    sessionStorage.setItem("role", role!);
  }

  private get role(): string | null {
    return sessionStorage.getItem("role");
  }

  logout() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("password");
    this.user$.next(this.user);
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
    return this.user.isLibrarian();
  }

  isAdmin() {
    return this.user.isAdmin();
  }

  isMember() {
    return this.user.isMember();
  }

  getUser(userSubject: Subject<any>) {
    return userSubject.pipe(
      mergeMap(() => this.user$)
    )
  }
}
