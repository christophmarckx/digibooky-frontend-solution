import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story12',
  templateUrl: './story12.component.html',
  styleUrls: ['./story12.component.css']
})
export class Story12Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
