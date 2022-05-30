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
    // var email = "ad@min.com"
    // var password = "admin"
    // var authorization = btoa(email + ":" + password)
    return this.http.get<Member[]>(this.memberUrl)
    // return this.http.get<Member[]>(this.memberUrl, {headers: {"Authorization": `basic ${authorization}`}})
  }

  public getMemberid(email: string|null): Observable<number> {
    return this.getMembers.pipe(
      map((members: any) => {
        members.forEach((member: any) => {
          if (member.email == email) {
            this.id = member.id;
            console.log("ID: " + this.id);
          }
        });
        return this.id;
      })
    );
  }

  public getMemberById(id: string|null): Observable<Member> {
    var member1: any = null;
    return this.getMembers.pipe(
      map((members: any) => {
        members.forEach((member: any) => {
          if (member.id == id) {
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

  lentbook(id: number, isbn: string, email: string, password: string): Observable<any> {
    var authorization = btoa(email + ":" + atob(password))
    console.log(`basic ${authorization}`)
    return this.http.post(`${environment.backendUrl}/books/${id}/${isbn}/lent`, null, {headers: {"Authorization": `basic ${authorization}`}} );
  }

  returnBook(id: number, isbn: string, email: string, password: string): Observable<any> {
    var authorization = btoa(email + ":" + atob(password))
    return this.http.post(`${environment.backendUrl}/books/${id}/${isbn}/return`, null, {headers: {"Authorization": `basic ${authorization}`}})
  }

  returnBookDamaged(id: number, isbn: string, email: string, password: string): Observable<any> {
    var authorization = btoa(email + ":" + atob(password))
    return this.http.post(`${environment.backendUrl}/books/${id}/${isbn}/return/damaged`, null, {headers: {"Authorization": `basic ${authorization}`}})
  }
}
