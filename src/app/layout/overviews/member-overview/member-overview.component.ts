import {Component, OnInit} from '@angular/core';
import {Member} from "../../../model/Member";
import {MemberService} from "../../../serviceMember/member.service";
import {AuthenticationService} from "../../../serviceLogin/authentication.service";

@Component({
  selector: 'app-member-overview',
  templateUrl: './member-overview.component.html',
  styleUrls: ['./member-overview.component.css']
})
export class MemberOverviewComponent implements OnInit {
  private _members: Array<Member> = [];

  constructor(private memberService: MemberService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  public getMembers(): void {
    this.memberService.getMembers.subscribe(members => this._members = members)
  }

  get members(): Array<Member> {
    return this._members;
  }

  public viewedByLibrarian(): boolean {
    return this.authenticationService.isLibrarian();
  }
}
