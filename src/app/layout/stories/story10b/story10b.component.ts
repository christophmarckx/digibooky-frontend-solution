import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story10b',
  templateUrl: './story10b.component.html',
  styleUrls: ['./story10b.component.css']
})
export class Story10bComponent implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
