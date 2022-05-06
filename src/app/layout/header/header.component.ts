import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../memberService/member.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public role: any;
  public id!: number;

  constructor(private memberService: MemberService) {
      this.role = sessionStorage.getItem("role");
      memberService.getMember(sessionStorage.getItem("email")).subscribe(member => this.id = member.id);
  }

  ngOnInit(): void {
  }
}
