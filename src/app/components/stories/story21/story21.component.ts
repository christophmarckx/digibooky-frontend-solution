import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story21',
  templateUrl: './story21.component.html',
  styleUrls: ['./story21.component.css']
})
export class Story21Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
