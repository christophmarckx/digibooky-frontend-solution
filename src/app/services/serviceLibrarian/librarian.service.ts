import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Librarian} from 'src/app/model/Librarian';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  private librarianUrl: string;

  constructor(private http: HttpClient) {
    this.librarianUrl = `${environment.backendUrl}/librarians`
  }

  get getLibrarians(): Observable<any> {
    return this.http.get<Librarian[]>(this.librarianUrl)
  }

  addLibrarian(librarian: Librarian): Observable<Librarian> {
    return this.http.post<Librarian>(this.librarianUrl, librarian);
  }
}
