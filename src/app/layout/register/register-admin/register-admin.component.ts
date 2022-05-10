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

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private route: Router) {
    this.admins = [];
    adminService.getAdmins.subscribe(admins => this.admins = admins);
  }

  ngOnInit(): void {
    this._adminForm = this.formBuilder.group({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      }
    )
  }

  onSubmit(adminvalues: any): void {
    // Process checkout data here
    this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => {
      this.adminService
        .addAdmin(adminvalues, admin).subscribe();
    });
    console.warn('Admin was added.', this._adminForm.value);
    this._adminForm.reset();
    this.route.navigate(["/admins"]).then(() => window.location.reload())

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
