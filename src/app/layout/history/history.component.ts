import { Component, OnInit } from '@angular/core';
import {BookService} from "../../serviceBook/book.service";
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {LibrarianService} from "../../serviceLibrarian/librarian.service";
import {History} from "../../model/History";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public history!: History;
  private isbn: string;

  constructor(private bookService: BookService, private librarianService: LibrarianService, private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
  }

  ngOnInit(): void {
    this.librarianService.getLibrarian(sessionStorage.getItem("email")).subscribe(librarian => {
      this.bookService.getHistory(librarian, this.isbn).subscribe(history => {this.history = history
      console.log(history)});
    })
  }
}
