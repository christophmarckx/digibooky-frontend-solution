import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Member} from "../../../model/member";
import {MemberService} from "../../../serviceMember/member.service";
import {Router} from "@angular/router";
import {BookService} from "../../../serviceBook/book.service";
import {Book} from "../../../model/Book";
import {LibrarianService} from "../../../serviceLibrarian/librarian.service";

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {
  private _bookForm!: FormGroup;
  private books: Array<Book>;

  constructor(private formBuilder: FormBuilder, private librarianService:LibrarianService, private bookService: BookService, private route: Router) {
    this.formBuilder = formBuilder;
    this.books = [];
    this.bookService.getBooks.subscribe(books => this.books = books);
  }

  ngOnInit(): void {
    this._bookForm = this.formBuilder.group({
        isbn: "",
        title: "",
        authorFirstName: "",
        authorLastName: "",
        price: "",
        copies: "",
        imageUrl: ""
      }
    )
  }

  onSubmit(bookvalues: any): void {
    // Process checkout data here
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
      this.bookService.addBook(bookvalues, librarian).subscribe();
    })
    console.warn('Member was added.', this._bookForm.value);
    this.route.navigate(["/books"]).then(() => window.location.reload())

  }

  get bookForm() {
    return this._bookForm;
  }
}
