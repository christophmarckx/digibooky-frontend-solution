import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story11',
  templateUrl: './story11.component.html',
  styleUrls: ['./story11.component.css']
})
export class Story11Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
