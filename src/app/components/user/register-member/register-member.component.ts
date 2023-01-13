import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Member} from "../../../model/Member";
import {Router} from "@angular/router";
import {catchError, mergeMap, throwError} from "rxjs";
import {Fine} from "../../../model/Fine";
import {Lending} from "../../../model/Lending";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";
import {MemberService} from "../../../services/serviceMember/member.service";

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  private _memberForm = this.formBuilder.group({
      id: 0,
      email: '',
      firstname: '',
      lastname: '',
      inss: '',
      password: '',
      street: '',
      streetnumber: '',
      postcode: '',
      city: '',
      lendings: this.formBuilder.array<Lending>([]),
      fines: this.formBuilder.array<Fine>([]),
      totalPrice: 0,
    }
  );
  public errors: string[] = [];

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: NonNullableFormBuilder,
              private memberService: MemberService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.errors = [];
    this.hasError(this._memberForm.getRawValue());
    console.log(this._memberForm.value)
    if (this.errors.length == 0) {
      this.authenticationService.addMember(this._memberForm.getRawValue())
        .pipe(
          catchError(err => {
            this.errors.push(err.error.message);
            return throwError(err);
          }),
          mergeMap(() => this.route.navigateByUrl("login"))
        ).subscribe();
    }
  }

  hasError(member: any) {
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
