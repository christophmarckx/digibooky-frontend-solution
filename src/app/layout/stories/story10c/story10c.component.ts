import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story10c',
  templateUrl: './story10c.component.html',
  styleUrls: ['./story10c.component.css']
})
export class Story10cComponent implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
