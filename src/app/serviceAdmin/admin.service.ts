import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Book} from "../model/Book";
import {Admin} from "../model/Admin";
import {Librarian} from "../model/Librarian";
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private credentials: string;
  private adminUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.credentials = "";
    this.http = http;
    this.adminUrl = `${environment.backendUrl}/admins`;
  }

  get getAdmins(): Observable<any> {
    var email = "ad@min.com"
    var password = "admin"
    var authorization = btoa(email + ":" + password)
    return this.http.get<Admin[]>(this.adminUrl, {headers: {"Authorization": `basic ${authorization}`}})
  }

  public getAdmin(id: number): Observable<any> {
    var email = "ad@min.com"
    var password = "admin"
    var authorization = btoa(email + ":" + atob(password))
    return this.http.get<Admin>(this.adminUrl + "/" + id, {headers: {"Authorization": `basic ${authorization}`}})
  }

  public getAnAdmin(email: string|null): Observable<Admin> {
    var admin1: any;
    return this.getAdmins.pipe(
      map((admins: any) => {
        admins.forEach((admin: any) => {
          if (admin.email == email) {
            admin1 = admin;
          }
        });
        this.credentials = admin1.email + ":" + admin1.password;
        return admin1;
      })
    );
  }

  addAdmin(adminNew: Admin, admin: Admin): Observable<Admin> {
    var authorization = btoa(admin.email + ":" + atob(admin.password));
    return this.http.post<Librarian>(this.adminUrl, adminNew, {headers: {"Authorization": `basic ${authorization}`}});
  }
}
