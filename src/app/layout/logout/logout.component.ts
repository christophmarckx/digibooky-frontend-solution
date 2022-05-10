import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private route: Router) {
  }

  ngOnInit(): void {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    this.route.navigate(["/login"]).then(() => window.location.reload())

  }

}
