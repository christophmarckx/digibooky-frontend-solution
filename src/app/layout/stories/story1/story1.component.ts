import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css']
})
export class Story1Component implements OnInit {
  public begin: string
  public end: string

  constructor() {
    this.begin = "{"
    this.end = "}"
  }

  ngOnInit(): void {
  }

}
