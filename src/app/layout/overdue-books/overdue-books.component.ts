import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../serviceBook/book.service";
import {Router} from "@angular/router";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {Member} from "../../model/Member";
import {LendingService} from "../../serviceLending/lending.service";
import {Observable} from "rxjs";
import {Lending} from "../../model/Lending";

@Component({
  selector: 'app-overdue-books',
  templateUrl: './overdue-books.component.html',
  styleUrls: ['./overdue-books.component.css']
})
export class OverdueBooksComponent implements OnInit {
  public overdueBooks$!: Observable<Lending[]>;

  constructor(private lendingService: LendingService) {
  }

  ngOnInit(): void {
    this.getOverdueBooks();
  }

  public getOverdueBooks(): void {
    this.overdueBooks$ = this.lendingService.getOverdueBooks();
  }
}
