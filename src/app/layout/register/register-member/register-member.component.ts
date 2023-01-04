import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MemberService} from "../../../serviceMember/member.service";
import {Member} from "../../../model/member";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../serviceLogin/authentication.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  private _memberForm!: FormGroup;
  private members: Array<Member>;
  public errors: Array<string>;

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private memberService: MemberService, private route: Router) {
    this.members = [];
    this.memberService.getMembers.subscribe(members => this.members = members);
    this.errors = [];
  }

  ngOnInit(): void {
    this._memberForm = this.formBuilder.group({
        inss: "",
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        streetname: "",
        streetnumber: "",
        postalcode: "",
        city: ""
      }
    );
  }

  onSubmit(membervalues: any): void {
    // Process checkout data here
    this.errors = [];
    this.hasError(this._memberForm.value);
    if (this.errors.length == 0) {
      this.authenticationService.addMember(membervalues)
        .pipe(
          catchError(err => {
            this.errors.push(err.error.message);
            return throwError(err);
          }))
        .subscribe(member => {
          this.updateSessionAndAddMember(member)
          this.route.navigate(["/"]).then(() => window.location.reload())
        });
    }
  }

  hasError(member: Member) {
    if (member.inss == "") {
      this.errors.push("INSS is not filled in");
    }
    if (member.lastname == "") {
      this.errors.push("Lastname is not filled in");
    }
    if (member.email == "") {
      this.errors.push("E-mail is not filled in");
    }
    if (member.password == "") {
      this.errors.push("Password is not filled in");
    }
    if (member.city == "") {
      this.errors.push("City is not filled in");
    }
  }

  updateSessionAndAddMember(member: Member) {
    this.members.push(member);
  }

  get memberForm() {
    return this._memberForm;
  }

  compare(email: string): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return email === this.authenticationService.username;
    }
    return false;
  }
}
