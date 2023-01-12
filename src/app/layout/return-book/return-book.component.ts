import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/Book";
import {ActivatedRoute, PRIMARY_OUTLET, Router} from "@angular/router";
import {BookService} from "../../serviceBook/book.service";
import {MemberService} from "../../serviceMember/member.service";
import {NonNullableFormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {mergeMap, Observable} from "rxjs";
import {LendingService} from "../../serviceLending/lending.service";
import {Lending} from "../../model/Lending";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  public returnForm = this.formBuilder.group({
    damaged: false,
  });
  public lending$!: Observable<Lending>;
  public damaged: boolean;

  constructor(public formBuilder: NonNullableFormBuilder,
              private lendingService: LendingService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.damaged = false;
  }

  ngOnInit(): void {
    this.lending$ = this.route.paramMap.pipe(
      mergeMap(params => this.lendingService.getLending(params.get("lendingId")!))
    )
  }

  setDamaged() {
    this.damaged = !this.damaged;
  }

  public returnBook(lending: Lending) {
    this.lendingService.returnBook(lending)
      .pipe(
        mergeMap(() => this.router.navigate(["/members/" + this.authenticationService.id!]))
      )
      .subscribe();
  }

  public returnBookBroken(lending: Lending) {
    this.lendingService.returnBook(lending)
      .pipe(
        mergeMap(() => this.router.navigate(["/members/" + this.authenticationService.id!]))
      )
      .subscribe();
  }

}
