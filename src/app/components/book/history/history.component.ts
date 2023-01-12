import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, PRIMARY_OUTLET, Router} from "@angular/router";
import {LibrarianService} from "../../../services/serviceLibrarian/librarian.service";
import {BookService} from "../../../services/serviceBook/book.service";
import {History} from "../../../model/History";
import {mergeMap, Observable} from "rxjs";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public histories$!: Observable<History[]>;

  constructor(private bookService: BookService,
              private librarianService: LibrarianService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.histories$ = this.route.paramMap.pipe(
      mergeMap(params => this.bookService.getHistory(params.get('isbn')!)),
    )
  }
}
