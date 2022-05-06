import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../memberService/member.service";
import {Member} from "../../model/member";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public member!: Member;

  constructor(private memberService: MemberService) {

  }

  ngOnInit(): void {
    this.memberService.getMember(sessionStorage.getItem("email")).subscribe(member => {
      this.member = member
      console.log(this.member)
    });
  }
}
