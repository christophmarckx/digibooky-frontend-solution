import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Health} from "../model/Health";

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  private healthUrl: string;

  constructor(private http: HttpClient) {
    this.healthUrl = `${environment.backendUrl}/health`;
  }

  getHealth() {
    return this.http.get<Health>(this.healthUrl);
  }
}
