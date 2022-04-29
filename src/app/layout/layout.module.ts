import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import { Story1Component } from './stories/story1/story1.component';
import { LoginComponent } from './login/login.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RegisterMemberComponent } from './register/register-member/register-member.component';
import { Story2Component } from './stories/story2/story2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    Story1Component,
    LoginComponent,
    BookOverviewComponent,
    BookDetailsComponent,
    RegisterMemberComponent,
    Story2Component
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
