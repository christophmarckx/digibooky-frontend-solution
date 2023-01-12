import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story19',
  templateUrl: './story19.component.html',
  styleUrls: ['./story19.component.css']
})
export class Story19Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
