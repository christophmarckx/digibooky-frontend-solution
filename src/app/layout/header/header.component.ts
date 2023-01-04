import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {Admin} from "../../model/Admin";
import {Librarian} from "../../model/Librarian";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DateService} from "../../serviceDate/date.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public id!: number;
  public member!: Member;
  public librarian!: Librarian;
  public admin!: Admin;
  public date!: string;

  constructor(private formbuilder: FormBuilder,
              private memberService: MemberService,
              private librarianService: LibrarianService,
              private adminService: AdminService,
              public authenticationService: AuthenticationService,
              private dateService: DateService) {
    this.formbuilder = formbuilder;
    if (this.authenticationService.isMember()) {
      memberService.getMember(this.authenticationService.username).subscribe(member => {
        this.id = member.id
        this.member = member
      });
    }
    if (this.authenticationService.isLibrarian()) {
      librarianService.getLibrarian(this.authenticationService.username).subscribe(librarian => {
        this.id = librarian.id
        this.librarian = librarian
      });
    }
    if (this.authenticationService.isAdmin()) {
      adminService.getAnAdmin(this.authenticationService.username).subscribe(admin => {
        this.id = admin.id
        this.admin = admin
      });
    }
    this.dateService.getDate().subscribe(date => this.date = date)
  }

  ngOnInit(): void {
  }

  get getDate(): string {
    return this.date;
  }
}
