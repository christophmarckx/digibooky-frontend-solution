import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Book} from "../model/Book";
import {Librarian} from "../model/Librarian";

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

  public getSearchBooks(isbn: string, title: string, author: string): Observable<any> {
    return this.http.get<Book[]>(this.bookUrl+"?isbn="+isbn+"&title="+title+"&author="+author);
  }

  public getBook(isbn: string): Observable<any> {
    return this.http.get<Book>(this.bookUrl + "/" + isbn)
  }

  public addBook(book: Book, librarian: Librarian) {
    var authorization = btoa(librarian.email + ":" + atob(librarian.password));
    return this.http.post<Book>(this.bookUrl, book, {headers: {"Authorization": `basic ${authorization}`}});
  }

  public overdueBooks(librarian: Librarian): Observable<any[]> {
    var authorization = btoa(librarian.email + ":" + atob(librarian.password));
    return this.http.get<Book[]>(`${environment.backendUrl}/overdueBooks`, {headers: {"Authorization": `basic ${authorization}`}})
  }
}
