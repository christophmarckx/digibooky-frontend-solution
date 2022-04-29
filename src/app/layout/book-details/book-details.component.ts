import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, PRIMARY_OUTLET} from '@angular/router';
import {BookService} from "../../serviceBook/book.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private bookService: BookService;
  private _book: Book;
  private isbn: string;

  constructor(bookService: BookService, private route: Router) {
    this.bookService = bookService;
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this._book = <Book>{};
  }

  ngOnInit(): void {
    this.getBook();
  }

  public getBook(): void {
    this.bookService.getBook(this.isbn).subscribe(book => this._book = book);
  }

  get book(): Book {
    return this._book;
  }
}
