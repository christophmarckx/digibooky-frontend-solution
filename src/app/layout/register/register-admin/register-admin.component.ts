import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Admin} from "../../../model/Admin";
import {AdminService} from "../../../serviceAdmin/admin.service";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  private _adminForm!: FormGroup;
  private admins: Array<Admin>;
  public errors: Array<string>;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private route: Router) {
    this.admins = [];
    adminService.getAdmins.subscribe(admins => this.admins = admins);
    this.errors = [];
  }

  ngOnInit(): void {
    this._adminForm = this.formBuilder.group({
        email: "",
        firstname: "",
        lastname: "",
        password: ""
      }
    )
  }

  onSubmit(adminvalues: any): void {
    // Process checkout data here
    this.errors = [];
    this.hasError(this._adminForm.value);
    if (this.errors.length == 0) {
      this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => {
        this.adminService
          .addAdmin(adminvalues, admin).subscribe();
      });
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
    if (sessionStorage.getItem("email") != null) {
      return email === sessionStorage.getItem("email");
    }
    return false;
  }

}
