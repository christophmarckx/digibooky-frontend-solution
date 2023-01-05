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

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }
}
