import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story18',
  templateUrl: './story18.component.html',
  styleUrls: ['./story18.component.css']
})
export class Story18Component implements OnInit {
  public role: string|null;

  constructor() {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }

}
