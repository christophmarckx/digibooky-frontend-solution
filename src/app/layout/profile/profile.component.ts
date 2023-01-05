import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {map, mergeMap, Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public member$!: Observable<Member>;

  constructor(public authenticationService: AuthenticationService, private memberService: MemberService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.member$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      mergeMap(id => this.memberService.getMemberById(id))
    );
  }
}
