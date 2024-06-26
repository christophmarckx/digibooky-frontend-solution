import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {catchError, mergeMap, throwError} from "rxjs";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private _loginForm = this.formBuilder.group({
    email: "",
    password: ""
  });
  private _roleForm = this.formBuilder.group({
    role: 'member'
  });
  public message!: string;
  public error!: string;
  public showTestProfiles = false;


  constructor(private formBuilder: NonNullableFormBuilder,
              private authenticationService: AuthenticationService,
              private route: Router,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(loginData: any) {
    this.error = "";
    this.getaccount(loginData.email, loginData.password);
    this._loginForm.reset();
  }

  onSubmit2({role}: any) {
    if (role === 'member') {
      this.loginForm.patchValue({email: 'koen@mail.com', password: 'passkoen'})
    } else if (role === 'librarian') {
      this.loginForm.patchValue({email: 'bob@library.com', password: 'password'})
    } else if (role === 'admin') {
      this.loginForm.patchValue({email: 'ad@min.com', password: 'admin'})
    }
  }

  removeRole() {
    this.authenticationService.logout();
  }

  getaccount(email: string, password: string) {
    this.authenticationService.login(email, password)
      .pipe(
        catchError(err => {
          this.error = "email and/or password is incorrect";
          return throwError(err);
        }),
        mergeMap(user => {
          if (user.isMember()) {
            return this.route.navigateByUrl(`/members/${user.id}`)
          } else {
            return this.route.navigateByUrl(`/`)
          }
        })
      )
      .subscribe();
  }

  get loginForm() {
    return this._loginForm;
  }


  get roleForm() {
    return this._roleForm;
  }

  toggle() {
    this.showTestProfiles = !this.showTestProfiles;
  }
}
