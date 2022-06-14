import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.dateUrl = `${environment.backendUrl}/date`;
  }

  public getDate() {
    return this.http.get<string>(this.dateUrl)
  }

  public setDate(date: string) {
    return this.http.post<string>(this.dateUrl, date);
  }

  public resetDate() {
    return this.http.post<string>(this.dateUrl + "/reset", "")
  }
}
