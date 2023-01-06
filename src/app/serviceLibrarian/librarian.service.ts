import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Librarian} from "../model/Librarian";
import {Admin} from "../model/Admin";
import {AdminService} from "../serviceAdmin/admin.service";

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
