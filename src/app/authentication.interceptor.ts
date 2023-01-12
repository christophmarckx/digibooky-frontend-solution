import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./services/serviceLogin/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authenticationService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.authenticationService.getBasic()}`
        }
      })
    }
    return next.handle(request);
  }
}
