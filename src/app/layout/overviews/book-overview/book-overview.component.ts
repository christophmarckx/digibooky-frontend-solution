import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../serviceBook/book.service";
import {Book} from "../../../model/Book";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {
  private _books: Array<Book> = [];
  private _searchForm!: FormGroup;
  public role: any;

  constructor(private bookService: BookService, private route: Router, private formBuilder: FormBuilder) {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
    this.getBooks();
    this._searchForm = this.formBuilder.group({
        isbn: "",
        title: "",
        author: ""
      }
    )
  }

  public getBooks(): void {
    this.bookService.getBooks.subscribe(books => this._books = books)
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
