import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, switchMap} from "rxjs";
import {environment} from "../../../environments/environment";
import {Book} from "../../model/Book";
import {History} from "../../model/History";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl: string;

  constructor(private http: HttpClient) {
    this.bookUrl = `${environment.backendUrl}/books`;
  }

  getBooks(selectedValues$: Subject<any>) {
    return selectedValues$
      .pipe(
        switchMap(selectValues => this.getSearchBooks(selectValues))
      )
  }

  get books(): Observable<any> {
    return this.http.get<Book[]>(this.bookUrl)
  }

  public getSearchBooks({isbn, title, author}: { isbn: string, title: string, author: string }): Observable<any> {
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
    return this.http.get<History[]>(this.bookUrl + "/" + isbn + "/history")
  }
}
