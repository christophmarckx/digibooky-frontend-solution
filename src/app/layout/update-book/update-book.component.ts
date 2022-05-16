import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/Book";
import {BookService} from "../../serviceBook/book.service";
import {MemberService} from "../../serviceMember/member.service";
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  private _bookForm!: FormGroup;
  private isbn: string;
  public book!: Book;

  constructor(private formBuilder: FormBuilder, private librarianService:LibrarianService, private bookService: BookService, private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this.bookService.getBook(this.isbn).subscribe(book => {
      this.book = book
      this.ngOnInit()
    });

  }

  ngOnInit(): void {
    this._bookForm = this.formBuilder.group({
        isbn: this.book.isbn,
        title: this.book.title,
        authorFirstName: this.book.authorFirstName,
        authorLastName: this.book.authorLastName,
        price: this.book.price,
        copies: this.book.copies,
        imageUrl: this.book.image
      }
    )
  }

  onSubmit(bookvalues: any): void {
    // Process checkout data here
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
      this.bookService.updateBook(bookvalues, librarian).subscribe();
    })
    console.warn('Book was updated.', this._bookForm.value);
    this.route.navigate(["/books/"+this.book.isbn]).then(() => window.location.reload())

  }

  get bookForm() {
    return this._bookForm;
  }
}
