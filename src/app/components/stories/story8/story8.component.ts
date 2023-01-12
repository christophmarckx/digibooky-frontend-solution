import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

@Component({
  selector: 'app-story8',
  templateUrl: './story8.component.html',
  styleUrls: ['./story8.component.css']
})
export class Story8Component implements OnInit {

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

}
