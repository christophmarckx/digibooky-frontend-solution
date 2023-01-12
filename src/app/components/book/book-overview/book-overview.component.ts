import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/Book";
import {Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthenticationService} from "../../../services/serviceLogin/authentication.service";
import {BookService} from "../../../services/serviceBook/book.service";

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {
  private _books$!: Observable<Book[]>;
  private _searchForm = this.formBuilder.group({
      isbn: "",
      title: "",
      author: ""
    }
  );
  public selectedValues$ = new BehaviorSubject<any>(this.searchForm.value)

  constructor(public authenticationService: AuthenticationService, private bookService: BookService, private route: Router, private formBuilder: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this._books$ = this.bookService.getBooks(this.selectedValues$);
  }

  get books$(): Observable<Book[]> {
    return this._books$;
  }

  get searchForm() {
    return this._searchForm;
  }

  bookId(index: number, book: Book) {
    return book.isbn;
  }
}
