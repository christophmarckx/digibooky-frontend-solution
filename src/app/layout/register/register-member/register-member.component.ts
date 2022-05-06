import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../../memberService/member.service";
import {Member} from "../../../model/member";

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  private _memberForm!: FormGroup;
  private formBuilder: FormBuilder;
  private memberService: MemberService;
  private members: Array<Member>;

  constructor(formBuilder: FormBuilder, memberService: MemberService) {
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

  onSubmit(): void {
    // Process checkout data here
    this.memberService
      .addMember(this._memberForm.value)
      .subscribe(member => this.updateSessionAndAddMember(member));
    console.warn('Member was added.', this._memberForm.value);
    this._memberForm.reset();
  }

  updateSessionAndAddMember(member: Member) {
    this.members.push(member);
    sessionStorage.setItem("email", member.email);
    sessionStorage.setItem("role", "member");
  }

  get memberForm() {
    return this._memberForm;
  }

  setCookie(sessionName: string, value: string) {
    sessionStorage.setItem(sessionName, value);
  }

  compare(email: string): boolean {
    if (sessionStorage.getItem("email") != null) {
      return email === sessionStorage.getItem("email");
    }
    return false;
  }
}
