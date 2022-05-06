import { Component, OnInit } from '@angular/core';
import {BookService} from "../../serviceBook/book.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {

  private _books: Array<Book> = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks.subscribe(books => this._books = books)
  }

  get books(): Array<Book> {
    return this._books;
  }
}
