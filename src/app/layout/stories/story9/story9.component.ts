import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story9',
  templateUrl: './story9.component.html',
  styleUrls: ['./story9.component.css']
})
export class Story9Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
