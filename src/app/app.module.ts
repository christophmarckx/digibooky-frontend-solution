import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from "./layout/layout.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthenticationInterceptor} from "./authentication.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
