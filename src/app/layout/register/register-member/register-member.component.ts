import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../../serviceMember/member.service";
import {Member} from "../../../model/member";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  private _memberForm!: FormGroup;
  private members: Array<Member>;

  constructor(private formBuilder: FormBuilder, private memberService: MemberService, private route: Router) {
    this.formBuilder = formBuilder;
    this.memberService = memberService;
    this.members = [];
    this.memberService.getMembers.subscribe(members => this.members = members);
  }

  ngOnInit(): void {
    this._memberForm = this.formBuilder.group({
        inss: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        streetname: "",
        streetnumber: "",
        postalcode: "",
        city: ""
      }
    )
  }

  onSubmit(membervalues: any): void {
    // Process checkout data here
    this.memberService
      .addMember(membervalues)
      .subscribe(member => {
        console.log("AUTO LOGIN after Registration");
        this.updateSessionAndAddMember(member);
      });
    console.warn('Member was added.', this._memberForm.value);
    this.route.navigate(["/"]).then(() => window.location.reload())

  }

  updateSessionAndAddMember(member: Member) {
    this.members.push(member);
    sessionStorage.setItem("email", member.email);
    sessionStorage.setItem("role", "member");
  }

  get memberForm() {
    return this._memberForm;
  }

  compare(email: string): boolean {
    if (sessionStorage.getItem("email") != null) {
      return email === sessionStorage.getItem("email");
    }
    return false;
  }
}
