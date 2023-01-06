import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Member} from "../model/Member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private memberUrl: string;

  constructor(private http: HttpClient) {
    this.memberUrl = `${environment.backendUrl}/members`;
  }

  get getMembers(): Observable<any> {
    return this.http.get<Member[]>(this.memberUrl)
  }

  public getMemberById(id: string|null): Observable<Member> {
    return this.http.get<Member>(`${this.memberUrl}/${id}`);
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.memberUrl, member)
  }

  lentbook(id: string, isbn: string): Observable<any> {
    return this.http.post(`${environment.backendUrl}/books/${id}/${isbn}/lent`, null);
  }

  returnBook(id: string, lendingId: string): Observable<any> {
    return this.http.post(`${environment.backendUrl}/books/${id}/${lendingId}/return`, null)
  }

  returnBookDamaged(id: string, lendingId: string): Observable<any> {
    return this.http.post(`${environment.backendUrl}/books/${id}/${lendingId}/return/damaged`, null)
  }
}
