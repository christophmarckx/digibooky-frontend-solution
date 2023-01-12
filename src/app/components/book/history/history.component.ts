import {Component, OnInit} from '@angular/core';
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {LibrarianService} from "../../../services/serviceLibrarian/librarian.service";
import {BookService} from "../../../services/serviceBook/book.service";
import {History} from "../../../model/History";


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
    this.bookService.getHistory(this.isbn).subscribe(history => {
      this.history = history
      console.log(history)
    });
  }
}
