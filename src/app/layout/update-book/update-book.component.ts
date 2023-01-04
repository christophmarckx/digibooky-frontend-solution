import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/Book";
import {BookService} from "../../serviceBook/book.service";
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
  public errors: Array<string>

  constructor(private formBuilder: FormBuilder, private librarianService: LibrarianService, private bookService: BookService, private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this.bookService.getBook(this.isbn).subscribe(book => {
      this.book = book
      this.ngOnInit()
    });
    this.errors = [];
  }

  ngOnInit(): void {
    this._bookForm = this.formBuilder.group({
        isbn: this.book.isbn,
        title: this.book.title,
        authorFirstname: this.book.authorFirstname,
        authorLastname: this.book.authorLastname,
        price: this.book.price,
        copies: this.book.copies,
        imageUrl: this.book.image
      }
    )
  }

  onSubmit(bookvalues: any): void {
    // Process checkout data here
    this.errors = [];
    this.hasError(this._bookForm.value);
    if (this.errors.length == 0) {
      this.bookService.updateBook(bookvalues).subscribe();
      console.warn('Book was updated.', this._bookForm.value);
      this.route.navigate(["/books/" + this.book.isbn]).then(() => window.location.reload())
    }
  }

  hasError(book: Book) {
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
