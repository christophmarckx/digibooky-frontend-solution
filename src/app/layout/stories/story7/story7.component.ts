import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story7',
  templateUrl: './story7.component.html',
  styleUrls: ['./story7.component.css']
})
export class Story7Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
