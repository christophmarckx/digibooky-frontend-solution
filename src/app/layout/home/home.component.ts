import { Component, OnInit } from '@angular/core';
import {Member} from "../../model/member";
import {MemberService} from "../../serviceMember/member.service";
import {Librarian} from "../../model/Librarian";
import {Admin} from "../../model/Admin";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";

@Component({
  selector: 'app-layout',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public member!: Member;
  public librarian!: Librarian;
  public admin!: Admin;

  constructor(private memberService: MemberService, private librarianService: LibrarianService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.memberService.getMember(sessionStorage.getItem("email")).subscribe(member => this.member = member);
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => this.librarian = librarian);
    this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => this.admin = admin);
  }

}
