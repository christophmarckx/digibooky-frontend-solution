import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../../model/User";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";
import {DateService} from "../../../services/serviceDate/date.service";

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
