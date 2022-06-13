import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../serviceMember/member.service";
import {provideRoutes, Router} from "@angular/router";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";

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


  constructor(private formBuilder: FormBuilder, private memberService: MemberService, private librarianService: LibrarianService, private adminService: AdminService, private route: Router) {
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
    if (sessionStorage.getItem("role") == "member") {
      this.getaccount("koen@mail.com", "passkoen")
    } else if (sessionStorage.getItem("role") == "librarian") {
      this.getaccount("bob@library.com", "password")
    } else if (sessionStorage.getItem("role") == "admin") {
      this.getaccount("ad@min.com", "admin")
    }
    this.route.navigate(["/"]).then(() => window.location.reload())
  }

  setRole(role: string) {
    sessionStorage.setItem("role", role);
  }

  removeRole() {
    if (sessionStorage.getItem("role") != null) {
      sessionStorage.removeItem("role");
      if (sessionStorage.getItem("email") != null) {
        sessionStorage.removeItem("email");
      }
    }
  }

  getaccount(email: string, password: string) {
    password = btoa(password);
    this.memberService.getMembers.subscribe((members: any) => {
      members.forEach((member: any) => {
        if (member.email == email && member.password == password) {
          this.setSession(member.email, "member");
          this.route.navigate(["/"]).then(() => window.location.reload())
        }
      });
    });
    this.librarianService.getLibrarians.subscribe((librarians: any) => {
      librarians.forEach((librarian: any) => {
        if (librarian.email == email && librarian.password == password) {
          this.setSession(librarian.email, "librarian");
          this.route.navigate(["/"]).then(() => window.location.reload())
        }
      });
    });
    this.adminService.getAdmins.subscribe((admins: any) => {
      admins.forEach((admin: any) => {
        if (admin.email == email && admin.password == password) {
          this.setSession(admin.email, "admin");
          this.route.navigate(["/"]).then(() => window.location.reload())
        }
      });
    });
    if (sessionStorage.getItem("role") == null) {
      this.error = "email and/or password is incorrect"
    }
  }

  setSession(email: string, role: string) {
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("role", role);
  }

  get loginForm() {
    return this._loginForm;
  }


  get roleForm(): FormGroup {
    return this._roleForm;
  }
}
