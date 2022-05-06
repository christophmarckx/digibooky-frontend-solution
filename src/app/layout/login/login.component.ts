import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../memberService/member.service";
import {CookieService} from "ngx-cookie-service";
import {Member} from "../../model/member";
import {toBase64String} from "@angular/compiler/src/output/source_map";
import {provideRoutes, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private _memberForm!: FormGroup;
  private memberService: MemberService;
  // private librarianService: LibrarianService;
  // private adminService: AdminService;
  private members: Array<Member>;
  public message!: string;


  constructor(private formBuilder: FormBuilder, memberService: MemberService, private route:Router) {
    this.memberService = memberService;
    this.members = [];
    this.memberService.getMembers.subscribe(members => this.members = members);
  }

  ngOnInit(): void {
    this._memberForm = this.formBuilder.group({
      email: "",
      password: ""
    })
  }

  onSubmit(loginData: any) {
    this.getaccount(loginData.email, loginData.password);
    this.route.parseUrl("/");

    this._memberForm.reset();
  }

  getaccount(email: string, password: string) {
    console.log("We zoeken iemand met het email: " + email + " en iemand met password: " + password)
    password = btoa(password);
    console.log("We zoeken iemand met het email: " + email + " en iemand met password: " + password)
    this.memberService.getMembers.subscribe((members: any) => {
      console.log(members)
      members.forEach((member: any) => {
        console.log("One member: ")
        console.log(member.email + " " + member.password)
        if (member.email == email && member.password == password) {
          this.setSession("email", member.email);
          this.setSession("role", "member");
        }
      });
    });
  }

  setSession(sessionName: string, value: string) {
    sessionStorage.setItem(sessionName, value);
  }


  get memberForm() {
    return this._memberForm;
  }
}
