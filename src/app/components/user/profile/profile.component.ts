import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap, Observable} from "rxjs";
import {MemberService} from "../../../services/serviceMember/member.service";
import {Member} from "../../../model/Member";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public member$!: Observable<Member>;

  constructor(public authenticationService: AuthenticationService,
              private memberService: MemberService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.member$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      mergeMap(id => this.memberService.getMemberById(id))
    );
  }
}
