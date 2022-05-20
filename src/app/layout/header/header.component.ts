import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {Admin} from "../../model/Admin";
import {Librarian} from "../../model/Librarian";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public role: any;
  public id!: number;
  public member!: Member;
  public librarian!: Librarian;
  public admin!: Admin;

  constructor(private memberService: MemberService, private librarianService: LibrarianService, private adminService: AdminService) {
      this.role = sessionStorage.getItem("role");
      if (this.role != null && this.role === "member") {
        memberService.getMember(sessionStorage.getItem("email")).subscribe(member => {
          this.id = member.id
          this.member = member
        });
      }
    if (this.role != null && this.role === "librarian") {
      librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
        this.id = librarian.id
        this.librarian = librarian
      });
    }
    if (this.role != null && this.role === "admin") {
      adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => {
        this.id = admin.id
        this.admin = admin
      });
    }
  }

  ngOnInit(): void {

  }
}
