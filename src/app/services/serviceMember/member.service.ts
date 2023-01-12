import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Member} from "../../model/Member";

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

  lendbook(id: string, isbn: string): Observable<any> {
    return this.http.post(`${environment.backendUrl}/books/${isbn}/lendings`, {memberId: id});
  }
}
