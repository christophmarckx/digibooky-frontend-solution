import { Component, OnInit } from '@angular/core';
import {Member} from "../../../model/member";
import {MemberService} from "../../../serviceMember/member.service";

@Component({
  selector: 'app-member-overview',
  templateUrl: './member-overview.component.html',
  styleUrls: ['./member-overview.component.css']
})
export class MemberOverviewComponent implements OnInit {
  private _members: Array<Member> = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers.subscribe(members => this._members = members)
  }

  get members(): Array<Member> {
    return this._members;
  }
}
