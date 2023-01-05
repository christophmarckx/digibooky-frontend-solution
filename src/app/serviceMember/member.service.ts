import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Member} from "../model/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private memberUrl: string;
  private id: number = 0;
  private credentials!: string;

  constructor(private http: HttpClient) {
    this.memberUrl = `${environment.backendUrl}/members`;
  }

  get getMembers(): Observable<any> {
    return this.http.get<Member[]>(this.memberUrl)
  }

  public getMemberid(email: string|null): Observable<number> {
    return this.getMembers.pipe(
      map((members: any) => {
        members.forEach((member: any) => {
          if (member.email == email) {
            this.id = member.id;
          }
        });
        return this.id;
      })
    );
  }

  public getMemberById(id: string|null): Observable<Member> {
    return this.http.get<Member>(`${this.memberUrl}/${id}`);
  }

  public getMember(email: string|null): Observable<Member> {
    var member1: any = null;
    return this.getMembers.pipe(
      map((members: any) => {
        members.forEach((member: any) => {
          if (member.email == email) {
            member1 = member;
          }
        });
        if (member1 != null) {
          this.credentials = member1.email + ":" + member1.password;
        }
        return member1;
      })
    );
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
