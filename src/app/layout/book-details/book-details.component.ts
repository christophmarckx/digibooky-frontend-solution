import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from "../../serviceBook/book.service";
import {Book} from "../../model/Book"
import {MemberService} from "../../serviceMember/member.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";
import {catchError, map, mergeMap, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private _book$!: Observable<Book>;
  public message: string | null = null;

  constructor(private bookService: BookService,
              private memberService: MemberService,
              public authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      mergeMap(isbn => this.getBook(isbn!))
    )
  }

  public getBook(isbn: string) {
    return this.bookService.getBook(isbn);
  }

  get book$() {
    return this._book$;
  }

  lendBook(book: Book) {
    this.memberService.lendbook(this.authenticationService.id!, book.isbn)
      .pipe(
        catchError(err => {
          this.message = err.error.message;
          console.log(err);
          return throwError(err);
        }),
        mergeMap(() => this.router.navigateByUrl(`/members/${this.authenticationService.id!}`))
      )
      .subscribe();
  }
}
