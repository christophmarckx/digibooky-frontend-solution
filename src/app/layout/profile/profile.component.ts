import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public member!: Member;

  constructor(public authenticationService: AuthenticationService, private memberService: MemberService, private route: Router) {
  }

  ngOnInit(): void {
    var id = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this.memberService.getMemberById(id).subscribe(member => {
      this.member = member;
    });
  }
}
