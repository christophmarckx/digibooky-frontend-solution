import { Component, OnInit } from '@angular/core';
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {BookService} from "../../serviceBook/book.service";
import {MemberService} from "../../serviceMember/member.service";
import {Book} from "../../model/Book";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  private _book: Book = <Book>{};
  public isbn!: string

  constructor(private bookService: BookService, private librarianService: LibrarianService, private memberService: MemberService, private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;

  }

  ngOnInit(): void {
    this.getBook()
  }

  public getBook(): void {
    this.bookService.getBook(this.isbn).subscribe(book => this._book = book);
  }

  get book(): Book {
    return this._book
  }

  deleteBook() {
    this.route.navigate(["/books"]).then(() => window.location.reload())
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
      this.bookService.deleteBook(librarian, this.isbn).subscribe();
    });
  }

  return() {

  }
}
