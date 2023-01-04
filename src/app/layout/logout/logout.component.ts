import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private route: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.route.navigate(["/"]).then(() => window.location.reload())

  }

}
