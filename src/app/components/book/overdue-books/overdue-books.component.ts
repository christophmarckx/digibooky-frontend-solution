import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Lending} from "../../../model/Lending";
import {LendingService} from "../../../services/serviceLending/lending.service";

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
