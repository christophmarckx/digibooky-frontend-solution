import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Admin} from "../../model/Admin";
import {Librarian} from "../../model/Librarian";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = `${environment.backendUrl}/admins`;
  }

  getAdmins(): Observable<any> {
    return this.http.get<Admin[]>(this.adminUrl)
  }

  addAdmin(adminNew: Admin): Observable<Admin> {
    return this.http.post<Librarian>(this.adminUrl, adminNew);
  }
}
