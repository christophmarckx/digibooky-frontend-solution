import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Login} from "../../model/Login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl: string;

  constructor(private httpClient: HttpClient) {
    this.loginUrl = `${environment.backendUrl}/login`
  }

  public login(username:string, password:string): Observable<Login> {
    return this.httpClient.post<Login>(this.loginUrl, {username, password});
  }
}
