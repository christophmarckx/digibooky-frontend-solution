import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Admin} from "../model/Admin";
import {Librarian} from "../model/Librarian";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminUrl: string;

  constructor(private http: HttpClient) {
    this.adminUrl = `${environment.backendUrl}/admins`;
  }

  get getAdmins(): Observable<any> {
    return this.http.get<Admin[]>(this.adminUrl)
  }

  public getAdmin(id: number): Observable<any> {
    return this.http.get<Admin>(this.adminUrl + "/" + id)
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
        return admin1;
      })
    );
  }

  addAdmin(adminNew: Admin): Observable<Admin> {
    return this.http.post<Librarian>(this.adminUrl, adminNew);
  }
}
