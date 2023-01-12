import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lending} from "../../model/Lending";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LendingService {
  private lendingUrl = `${environment.backendUrl}/lendings`;

  constructor(private http: HttpClient) {
  }

  getOverdueBooks(): Observable<Lending[]> {
    return this.http.get<Lending[]>(`${this.lendingUrl}?overdue=true`);
  }

  getLending(lendingId: string) {
    return this.http.get<Lending>(`${this.lendingUrl}/${lendingId}`);
  }

  returnOverdueBook(lending: Lending): Observable<any> {
    return this.http.post(`${this.lendingUrl}/${lending.id}/return`, {returnState: 'OVERDUE'});
  }

  returnBookDamaged(lending: Lending): Observable<any> {
    return this.http.post(`${this.lendingUrl}/${lending.id}/return`, {returnState: 'DAMAGED'});
  }
}
