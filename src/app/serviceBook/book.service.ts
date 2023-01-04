import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
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
    return this.http.get<Book[]>(this.bookUrl + "?isbn=" + isbn + "&title=" + title + "&author=" + author);
  }

  public getBook(isbn: string): Observable<any> {
    return this.http.get<Book>(this.bookUrl + "/" + isbn)
  }

  public addBook(book: Book): Observable<any> {
    return this.http.post<Book>(this.bookUrl, book);
  }

  public updateBook(book: Book) {
    return this.http.put<Book>(this.bookUrl + "/" + book.isbn, book)
  }

  public deleteBook(isbn: string) {
    return this.http.delete<Book[]>(this.bookUrl + "/" + isbn)
  }

  public overdueBooks(): Observable<any[]> {
    return this.http.get<Book[]>(`${environment.backendUrl}/overdueBooks`)
  }

  public getHistory(isbn: string): Observable<any> {
    return this.http.get<Book[]>(this.bookUrl + "/" + isbn + "/history")
  }
}
