import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story7',
  templateUrl: './story7.component.html',
  styleUrls: ['./story7.component.css']
})
export class Story7Component implements OnInit {
  public begin: string
  public end: string
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
    this.begin = "{";
    this.end = "}";
  }

  ngOnInit(): void {
  }

}
