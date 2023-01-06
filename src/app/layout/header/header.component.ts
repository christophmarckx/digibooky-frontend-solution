import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {Admin} from "../../model/Admin";
import {Librarian} from "../../model/Librarian";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {AdminService} from "../../serviceAdmin/admin.service";
import {DateService} from "../../serviceDate/date.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {Observable} from "rxjs";
import {User} from "../../model/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date!: string;
  public user$!: Observable<User>;

  constructor(public authenticationService: AuthenticationService,
              private dateService: DateService) {

  }

  ngOnInit(): void {
    this.dateService.getDate().subscribe(date => this.date = date);
    this.user$ = this.authenticationService.user$;
    setTimeout(() => this.authenticationService.getUser(), 1);
  }

  get getDate(): string {
    return this.date;
  }

  logout() {
    this.authenticationService.logout();
    setTimeout(() => {this.authenticationService.getUser();}, 1);
  }
}
