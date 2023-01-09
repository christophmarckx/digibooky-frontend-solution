import {Component, OnInit} from '@angular/core';
import {DateService} from "../../serviceDate/date.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {User} from "../../model/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date!: string;
  public user$!: Observable<User>;
  private userSubject$ = new BehaviorSubject(null);

  constructor(public authenticationService: AuthenticationService,
              private dateService: DateService) {

  }

  ngOnInit(): void {
    this.dateService.getDate().subscribe(date => this.date = date);
    this.user$ = this.authenticationService.getUser(this.userSubject$);
  }

  get getDate(): string {
    return this.date;
  }

  logout() {
    this.authenticationService.logout();
  }
}
