import {Component, OnInit} from '@angular/core';
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {Book} from "../../../model/Book";
import {BookService} from "../../../services/serviceBook/book.service";
import {LibrarianService} from "../../../services/serviceLibrarian/librarian.service";
import {MemberService} from "../../../services/serviceMember/member.service";

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
    this.bookService.deleteBook(this.isbn).subscribe();
  }

  return() {
    this.route.navigate(["/books/" + this.isbn]).then(() => window.location.reload());
  }
}
