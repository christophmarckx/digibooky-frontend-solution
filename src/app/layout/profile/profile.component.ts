import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {PRIMARY_OUTLET, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public member!: Member;
  public role!: string | null;

  constructor(private memberService: MemberService, private route: Router) {
  }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("role");
    var id = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this.memberService.getMemberById(id).subscribe(member => {
      this.member = member;
    });
  }
}
