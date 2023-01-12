import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

@Component({
  selector: 'app-story7',
  templateUrl: './story7.component.html',
  styleUrls: ['./story7.component.css']
})
export class Story7Component implements OnInit {
  public begin: string
  public end: string

  constructor(public authenticationService: AuthenticationService) {
    this.begin = "{";
    this.end = "}";
  }

  ngOnInit(): void {
  }

}
