import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story14',
  templateUrl: './story14.component.html',
  styleUrls: ['./story14.component.css']
})
export class Story14Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
