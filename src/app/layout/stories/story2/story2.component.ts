import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.css']
})
export class Story2Component implements OnInit {
  public begin: string
  public end: string

  constructor() {
    this.begin = "{"
    this.end = "}"
  }

  ngOnInit(): void {
  }

}
