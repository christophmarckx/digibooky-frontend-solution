import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Librarian} from "../model/Librarian";
import {Member} from "../model/member";
import {Admin} from "../model/Admin";
import {AdminService} from "../serviceAdmin/admin.service";

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  private librarianUrl: string;
  private id: number = 0;
  private credentials!: string;

  constructor(private http: HttpClient, private adminService: AdminService) {
    this.librarianUrl = `${environment.backendUrl}/librarians`
  }

  get getLibrarians(): Observable<any> {
    return this.http.get<Librarian[]>(this.librarianUrl)
  }

  public getLibrarianid(email: string|null): Observable<number> {
    return this.getLibrarians.pipe(
      map((librarians: any) => {
        librarians.forEach((librarian: any) => {
          if (librarian.email == email) {
            this.id = librarian.id;
            console.log("ID: " + this.id);
          }
        });
        return this.id;
      })
    );
  }

  public getLibrarian(email: string|null): Observable<Librarian> {
    var librarian1: any;
    return this.getLibrarians.pipe(
      map((librarians: any) => {
        librarians.forEach((librarian: any) => {
          if (librarian.email == email) {
            librarian1 = librarian;
          }
        });
        console.log(librarian1.email + " " + librarian1.password)
        this.credentials = librarian1.email + ":" + librarian1.password;
        return librarian1;
      })
    );
  }

  addLibrarian(librarian: Librarian, admin: Admin): Observable<Librarian> {
    var authorization = btoa(admin.email + ":" + atob(admin.password));
    return this.http.post<Librarian>(this.librarianUrl, librarian, {headers: {"Authorization": `basic ${authorization}`}});
  }
}
