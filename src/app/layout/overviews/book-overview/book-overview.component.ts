import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../serviceBook/book.service";
import {Book} from "../../../model/Book";
import {Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../../serviceLogin/authentication.service";

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {
  private _books: Array<Book> = [];
  private _searchForm = this.formBuilder.group({
      isbn: "",
      title: "",
      author: ""
    }
  );

  constructor(public authenticationService: AuthenticationService, private bookService: BookService, private route: Router, private formBuilder: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks.subscribe(books => {
      this._books = books
    })
  }

  get books(): Array<Book> {
    return this._books;
  }

  onSubmit(selectedvalues: any): void {
    this.bookService.getSearchBooks(selectedvalues.isbn, selectedvalues.title, selectedvalues.author).subscribe(books => this._books = books);
  }

  get searchForm() {
    return this._searchForm;
  }
}
