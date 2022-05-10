import { Component, OnInit } from '@angular/core';
import {Member} from "../../model/member";
import {MemberService} from "../../serviceMember/member.service";
import {PRIMARY_OUTLET, Router} from "@angular/router";

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.css']
})
export class LendBookComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
