import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story10a',
  templateUrl: './story10a.component.html',
  styleUrls: ['./story10a.component.css']
})
export class Story10aComponent implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
