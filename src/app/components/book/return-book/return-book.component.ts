import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {mergeMap, Observable} from "rxjs";
import {Lending} from "../../../model/Lending";
import {LendingService} from "../../../services/serviceLending/lending.service";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";

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
    this.lendingService.returnOverdueBook(lending)
      .pipe(
        mergeMap(() => this.router.navigate(["/members/" + this.authenticationService.id!]))
      )
      .subscribe();
  }

  public returnBookBroken(lending: Lending) {
    this.lendingService.returnBookDamaged(lending)
      .pipe(
        mergeMap(() => this.router.navigate(["/members/" + this.authenticationService.id!]))
      )
      .subscribe();
  }

}
