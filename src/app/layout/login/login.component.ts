import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {catchError} from "rxjs";

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
    role: ""
  });
  public message!: string;
  public error!: string;


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

  onSubmit2(loginData: any) {
    if (this.authenticationService.isMember()) {
      this.getaccount("koen@mail.com", "passkoen")
    } else if (this.authenticationService.isLibrarian()) {
      this.getaccount("bob@library.com", "password")
    } else if (this.authenticationService.isAdmin()) {
      this.getaccount("ad@min.com", "admin")
    }
    this.route.navigate(["/"]).then(() => window.location.reload())
  }

  removeRole() {
    this.authenticationService.logout();
  }

  getaccount(email: string, password: string) {
    this.authenticationService.login(email, password)
      .pipe(
        catchError(err => {
          this.error = "email and/or password is incorrect";
          return err;
        })
      )
      .subscribe(() => this.route.navigate(["/"]).then(() => window.location.reload()));
  }

  get loginForm() {
    return this._loginForm;
  }


  get roleForm() {
    return this._roleForm;
  }
}
