import {Component, OnInit} from '@angular/core';
import {FormBuilder, NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Admin} from "../../../model/Admin";
import {AdminService} from "../../../serviceAdmin/admin.service";
import {AuthenticationService} from "../../../serviceLogin/authentication.service";

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
  private admins: Array<Admin>;
  public errors: Array<string>;

  constructor(private authenticationService: AuthenticationService, private formBuilder: NonNullableFormBuilder, private adminService: AdminService, private route: Router) {
    this.admins = [];
    adminService.getAdmins.subscribe(admins => this.admins = admins);
    this.errors = [];
  }

  ngOnInit(): void {
  }

  onSubmit(adminvalues: any): void {
    this.errors = [];
    this.hasError(this._adminForm.getRawValue());
    if (this.errors.length == 0) {
      this.adminService.addAdmin(adminvalues).subscribe();
      this.route.navigate(["/admins"]).then(() => window.location.reload())
    }
  }

  hasError(admin: Admin) {
    if (admin.email == "") {
      this.errors.push("E-mail is not filled in");
    }
    if (admin.password == "") {
      this.errors.push("Password is not filled in");
    }
    if (admin.firstname == "") {
      this.errors.push("Firstname is not filled in");
    }
    if (admin.lastname == "") {
      this.errors.push("Lastname is not filled in");
    }
  }

  get adminForm() {
    return this._adminForm;
  }

  compare(email: string): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return email === this.authenticationService.username;
    }
    return false;
  }

}
