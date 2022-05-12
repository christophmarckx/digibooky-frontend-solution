import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";

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
      if (this.role != null) {
        memberService.getMember(sessionStorage.getItem("email")).subscribe(member => this.id = member.id);
      }
  }

  ngOnInit(): void {
  }
}
