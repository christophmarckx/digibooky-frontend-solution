import {Component, OnInit} from '@angular/core';
import {Member} from "../../../model/Member";
import {Librarian} from "../../../model/Librarian";
import {Admin} from "../../../model/Admin";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

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
