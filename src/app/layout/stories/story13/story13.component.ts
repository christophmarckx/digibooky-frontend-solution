import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story13',
  templateUrl: './story13.component.html',
  styleUrls: ['./story13.component.css']
})
export class Story13Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
