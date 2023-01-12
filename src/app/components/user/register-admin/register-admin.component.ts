import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Admin} from "../../../model/Admin";
import {mergeMap} from "rxjs";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";
import {AdminService} from "../../../services/serviceAdmin/admin.service";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  private _adminForm = this.formBuilder.group({
      id: 0,
      email: "",
      firstname: "",
      lastname: "",
      password: ""
    }
  );
  public errors: string[] = [];

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: NonNullableFormBuilder,
              private adminService: AdminService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(adminvalues: any): void {
    this.errors = this.getErrors(this._adminForm.getRawValue());
    if (this.errors.length != 0) {
      return;
    }

    this.adminService.addAdmin(adminvalues)
      .pipe(
        mergeMap(() => this.route.navigate(["/admins"]))
      )
      .subscribe();
  }

  getErrors(admin: Admin) {
    let errors = [];
    if (admin.email == "") {
      errors.push("E-mail is not filled in");
    }
    if (admin.password == "") {
      errors.push("Password is not filled in");
    }
    if (admin.firstname == "") {
      errors.push("Firstname is not filled in");
    }
    if (admin.lastname == "") {
      errors.push("Lastname is not filled in");
    }
    return errors;
  }

  get adminForm() {
    return this._adminForm;
  }
}
