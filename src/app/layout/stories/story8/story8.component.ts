import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story8',
  templateUrl: './story8.component.html',
  styleUrls: ['./story8.component.css']
})
export class Story8Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
