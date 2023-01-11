import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, UntypedFormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../../serviceBook/book.service";
import {Book} from "../../../model/Book";
import {LibrarianService} from "../../../serviceLibrarian/librarian.service";
import {catchError, mergeMap} from "rxjs";

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {
  private _bookForm = this.formBuilder.group({
    isbn: '',
    title: '',
    authorFirstname: '',
    authorLastname: '',
    author: '',
    copies: 1,
    price: 0,
    arrival: '',
    image: 'https://archive.switchfully.com/track/functional/digibooky/assets/book.jpg',
    dueDate: '',
    lenderNames: [],
    lendingId: ''
  });

  public errors: Array<string>;
  public open = false;

  constructor(private formBuilder: NonNullableFormBuilder,
              private librarianService: LibrarianService,
              private bookService: BookService,
              private route: Router) {
    this.errors = [];
  }

  ngOnInit(): void {
  }

  onSubmit(bookvalues: any): void {
    this.errors = this.getErrors(this._bookForm.getRawValue());
    if (this.errors.length != 0) {
      return;
    }

    this.bookService.addBook(bookvalues)
      .pipe(
        catchError(error => {
          this.errors.push(error.error.message);
          return error;
        }),
        mergeMap(() => this.route.navigate(["/books"]))
      )
      .subscribe();
  }

  getErrors(book: Book) {
    let errors: string[] = []
    if (book.isbn == "") {
      errors.push("ISBN is not filled in");
    }
    if (book.title == "") {
      errors.push("Title is not filled in");
    }
    if (book.authorFirstname == "") {
      errors.push("Authors firstname is not filled in");
    }
    if (book.authorLastname == "") {
      errors.push("Authors lastname is not filled in");
    }
    if (book.price == 0) {
      errors.push("price is not filled in");
    }
    return errors;
  }

  get bookForm(): FormGroup {
    return this._bookForm;
  }

  toggle() {
    this.open = !this.open;
  }
}
