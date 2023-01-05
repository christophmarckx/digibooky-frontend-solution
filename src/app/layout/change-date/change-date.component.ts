import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DateService} from "../../serviceDate/date.service";
import {NonNullableFormBuilder} from "@angular/forms";

@Component({
  selector: 'app-change-date',
  templateUrl: './change-date.component.html',
  styleUrls: ['./change-date.component.css']
})
export class ChangeDateComponent {
  private _dateForm = this.formbuilder.group({
    changeDate: ""
  });
  public date!: string;

  constructor(private route: Router,
              private dateService: DateService,
              private formbuilder: NonNullableFormBuilder) {
    this.dateService.getDate().subscribe(date => this.date = date);
  }

  public resetDate() {
    this.route.navigate(["/"]).then(() => window.location.reload());
    return this.dateService.resetDate().subscribe()
  }

  public changeDate(datevalues: any): void {
    this.dateService.setDate(datevalues.changeDate).subscribe(() => {
      this.dateService.getDate().subscribe(date => this.date = date)
    })
    this.route.navigate(["/"]).then(() => window.location.reload());
  }

  get getDate(): string {
    return this.date;
  }

  get dateForm() {
    return this._dateForm;
  }
}
