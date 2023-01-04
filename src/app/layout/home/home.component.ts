import {Component, OnInit} from '@angular/core';
import {Member} from "../../model/member";
import {MemberService} from "../../serviceMember/member.service";
import {Librarian} from "../../model/Librarian";
import {Admin} from "../../model/Admin";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {NonNullableFormBuilder} from "@angular/forms";
import {DateService} from "../../serviceDate/date.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-layout',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public member!: Member;
  public librarian!: Librarian;
  public admin!: Admin;
  public role!: string | null;
  private _dateForm = this.formbuilder.group({
    changeDate: ""
  });
  public date!: string;

  constructor(private route: Router,
              private dateService: DateService,
              private memberService: MemberService,
              private librarianService: LibrarianService,
              private adminService: AdminService,
              private authenticationService: AuthenticationService,
              private formbuilder: NonNullableFormBuilder) {
    this.dateService.getDate().subscribe(date => this.date = date);
  }

  ngOnInit(): void {
    this.memberService.getMember(this.authenticationService.username).subscribe(member => this.member = member);
    this.librarianService.getLibrarian(this.authenticationService.username).subscribe(librarian => this.librarian = librarian);
    this.adminService.getAnAdmin(this.authenticationService.username).subscribe(admin => this.admin = admin);
    this.role = this.authenticationService.role;
  }

  public resetDate() {
    this.route.navigate(["/"]).then(() => window.location.reload());
    return this.dateService.resetDate().subscribe()
  }

  public changeDate(datevalues: any): void {
    this.dateService.setDate(datevalues.changeDate).subscribe(() => {
      this.dateService.getDate().subscribe(date => this.date = date)
    })
    this.route.navigate(["/"]).then(() => window.location.reload());
  }

  get getDate(): string {
    return this.date;
  }

  get dateForm() {
    return this._dateForm;
  }
}
