import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../serviceBook/book.service";
import {Router} from "@angular/router";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {Member} from "../../model/member";

@Component({
  selector: 'app-overdue-books',
  templateUrl: './overdue-books.component.html',
  styleUrls: ['./overdue-books.component.css']
})
export class OverdueBooksComponent implements OnInit {
  private _member: Array<Member> = [];
  public role: any;

  constructor(private bookService: BookService, private librarianService: LibrarianService) {
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
    this.getOverdueBooks();
  }

  public getOverdueBooks(): void {
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
      this.bookService.overdueBooks(librarian).subscribe(member => this._member = member)
    });
  }

  get books(): Array<Member> {
    return this._member;
  }
}
