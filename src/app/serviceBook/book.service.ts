import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.bookUrl = `${environment.backendUrl}/books`;
  }

  get getBooks(): Observable<any> {
    return this.http.get<Book[]>(this.bookUrl)
  }

  public getBook(isbn: string): Observable<any> {
    return this.http.get<Book>(this.bookUrl + "/" + isbn)
  }
}
