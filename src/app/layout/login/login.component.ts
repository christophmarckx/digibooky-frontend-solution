import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
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
  private members: Array<Member>;
  public message!: string;
  public error!: string;


  constructor(private formBuilder: FormBuilder, private memberService: MemberService, private librarianService: LibrarianService, private adminService: AdminService, private route: Router) {
    this.members = [];
    this.memberService.getMembers.subscribe(members => this.members = members);
  }

  ngOnInit(): void {
    this._loginForm = this.formBuilder.group({
      email: "",
      password: ""
    })
  }

  onSubmit(loginData: any) {
    this.error = "";
    this.getaccount(loginData.email, loginData.password);
    // TODO: wanneer login mislukt, foutboodschap meegeven.
    this._loginForm.reset();
  }

  getaccount(email: string, password: string) {
    password = btoa(password);
    this.memberService.getMembers.subscribe((members: any) => {
      console.log(members)
      members.forEach((member: any) => {
        console.log("One member: ")
        console.log(member.email + " " + member.password)
        if (member.email == email && member.password == password) {
          this.setSession(member.email, "member");
          this.route.navigate(["/"]).then(() => window.location.reload())
        }
      });
    });
    this.librarianService.getLibrarians.subscribe((librarians: any) => {
      console.log(librarians)
      librarians.forEach((librarian: any) => {
        console.log("One member: ")
        console.log(librarian.email + " " + librarian.password)
        if (librarian.email == email && librarian.password == password) {
          this.setSession(librarian.email, "librarian");
          this.route.navigate(["/"]).then(() => window.location.reload())
        }
      });
    });
    this.adminService.getAdmins.subscribe((admins: any) => {
      console.log(admins)
      admins.forEach((admin: any) => {
        console.log("One Admin: ")
        console.log(admin.email + " " + admin.password)
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
}
