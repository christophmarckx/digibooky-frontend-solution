import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";
import {DateService} from "../../../services/serviceDate/date.service";
import {mergeMap, Observable, tap} from "rxjs";

@Component({
  selector: 'app-change-date',
  templateUrl: './change-date.component.html',
  styleUrls: ['./change-date.component.css']
})
export class ChangeDateComponent implements OnInit {
  private _dateForm = this.formbuilder.group({
    changeDate: ""
  });
  public date$!: Observable<string>;
  public toggle = false;

  constructor(private route: Router,
              private dateService: DateService,
              private formbuilder: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    this.getDate();
  }

  getDate() {
    this.date$ = this.dateService.getDate();
  }

  clickToggle() {
    this.toggle = !this.toggle;
  }

  public resetDate() {
    this.dateService.resetDate()
      .pipe(
        tap(() => this.getDate()),
        tap(() => this.clickToggle())
      ).subscribe();
  }

  public changeDate(datevalues: any): void {
    this.dateService.setDate(datevalues.changeDate)
      .pipe(
        tap(() => this.getDate()),
        tap(() => this.clickToggle())
      ).subscribe();
  }

  get dateForm() {
    return this._dateForm;
  }
}
