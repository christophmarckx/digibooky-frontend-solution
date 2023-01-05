import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {Admin} from "../../model/Admin";
import {Librarian} from "../../model/Librarian";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {DateService} from "../../serviceDate/date.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date!: string;

  constructor(public authenticationService: AuthenticationService,
              private dateService: DateService) {
    this.dateService.getDate().subscribe(date => this.date = date)
  }

  ngOnInit(): void {
  }

  get getDate(): string {
    return this.date;
  }
}
