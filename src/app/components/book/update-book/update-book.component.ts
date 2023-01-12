import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {mergeMap} from "rxjs";
import {LibrarianService} from "../../../services/serviceLibrarian/librarian.service";
import {Book} from "../../../model/Book";
import {BookService} from "../../../services/serviceBook/book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  private _bookForm = this.formBuilder.group({
      isbn: '',
      title: '',
      authorFirstname: '',
      authorLastname: '',
      author: '',
      copies: 0,
      price: 0,
      arrival: '',
      image: '',
      dueDate: '',
      lenderNames: [],
      lendingId: ''
    }
  );
  public errors: string[] = [];

  constructor(private formBuilder: NonNullableFormBuilder,
              private librarianService: LibrarianService,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap(params => this.bookService.getBook(params.get('isbn')!)),
    ).subscribe(book => {
      this._bookForm.patchValue(book)
    });
  }

  onSubmit(bookvalues: any): void {
    // Process checkout data here
    this.errors = this.getError(this._bookForm.getRawValue());
    if (this.errors.length != 0) {
      return;
    }
    this.bookService.updateBook(bookvalues)
      .pipe(
        mergeMap(() => this.router.navigate(["/books/" + this._bookForm.value.isbn]))
      ).subscribe();
  }

  getError(book: Book) {
    let errors = [];
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

  get bookForm() {
    return this._bookForm;
  }
}
