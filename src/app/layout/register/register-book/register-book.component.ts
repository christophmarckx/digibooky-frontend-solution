import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
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
  public errors: Array<string>;

  constructor(private formBuilder: FormBuilder, private librarianService: LibrarianService, private bookService: BookService, private route: Router) {
    this.formBuilder = formBuilder;
    this.books = [];
    this.bookService.getBooks.subscribe(books => this.books = books);
    this.errors = [];
  }

  ngOnInit(): void {
    this._bookForm = this.formBuilder.group({
      isbn: "",
      title: "",
      authorFirstname: "",
      authorLastname: "",
      price: "",
      copies: "",
      imageUrl: ""
    });
  }

  onSubmit(bookvalues: any): void {
    // Process checkout data here
    console.log(bookvalues)
    this.errors = [];
    this.hasError(this._bookForm.value);
    if (this.errors.length == 0) {
      this.librarianService.getLibrarian(sessionStorage.getItem("email"))
        .subscribe(
          librarian => {
            this.bookService.addBook(bookvalues, librarian).subscribe(
              x => {
                this.route.navigate(["/books"]).then(() => window.location.reload())
              },
              error => {
                this.errors.push(error.error.message);
              });
          });
    }
  }

  hasError(book: Book) {
    // Check for all the required, but empty fields
    if (book.isbn == "") {
      this.errors.push("ISBN is not filled in");
    }
    if (book.title == "") {
      this.errors.push("Title is not filled in");
    }
    if (book.authorFirstname == "") {
      this.errors.push("Authors firstname is not filled in");
    }
    if (book.authorLastname == "") {
      this.errors.push("Authors lastname is not filled in");
    }
    if (book.price == 0) {
      this.errors.push("price is not filled in");
    }
    if (book.copies == 0) {
      book.copies = 1;
    }
    if (book.image == "") {
      book.image = "";
    }
  }

  get bookForm() {
    return this._bookForm;
  }
}
