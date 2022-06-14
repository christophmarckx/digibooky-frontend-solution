import { Component, OnInit } from '@angular/core';
import {Member} from "../../model/member";
import {MemberService} from "../../serviceMember/member.service";
import {Librarian} from "../../model/Librarian";
import {Admin} from "../../model/Admin";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DateService} from "../../serviceDate/date.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public member!: Member;
  public librarian!: Librarian;
  public admin!: Admin;
  public role!: string|null;
  private _dateForm!: FormGroup;
  public date!: string;

  constructor(private route: Router,private dateService: DateService, private memberService: MemberService, private librarianService: LibrarianService, private adminService: AdminService, private formbuilder: FormBuilder) {
    this.dateService.getDate().subscribe(date => this.date = date);
  }

  ngOnInit(): void {
    this.memberService.getMember(sessionStorage.getItem("email")).subscribe(member => this.member = member);
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => this.librarian = librarian);
    this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => this.admin = admin);
    this.role = sessionStorage.getItem("role")
    this._dateForm = this.formbuilder.group({
      changeDate: ""
    });
  }

  public resetDate() {
      this.route.navigate(["/"]).then(() => window.location.reload());
    return this.dateService.resetDate().subscribe()
  }

  public changeDate(datevalues: any): void {
    this.dateService.setDate(datevalues.changeDate).subscribe(iets => {
      this.dateService.getDate().subscribe(date => this.date = date)
    })
      this.route.navigate(["/"]).then(() => window.location.reload());
  }

  get getDate(): string {
    return this.date;
  }

  get dateForm(): FormGroup {
    return this._dateForm;
  }
}
