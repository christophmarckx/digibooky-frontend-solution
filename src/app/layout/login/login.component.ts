import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../serviceMember/member.service";
import {provideRoutes, Router} from "@angular/router";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private _loginForm!: FormGroup;
  private _roleForm!: FormGroup;
  public message!: string;
  public error!: string;


  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
    this._loginForm = this.formBuilder.group({
      email: "",
      password: ""
    })
    this._roleForm = this.formBuilder.group({
      role: ""
    })
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


  get roleForm(): FormGroup {
    return this._roleForm;
  }
}
