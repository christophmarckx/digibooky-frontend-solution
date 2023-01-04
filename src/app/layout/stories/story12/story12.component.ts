import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../serviceLogin/authentication.service";

@Component({
  selector: 'app-story12',
  templateUrl: './story12.component.html',
  styleUrls: ['./story12.component.css']
})
export class Story12Component implements OnInit {

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

}
