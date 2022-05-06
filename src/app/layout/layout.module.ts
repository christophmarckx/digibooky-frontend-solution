import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RegisterMemberComponent } from './register/register-member/register-member.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import { LendBookComponent } from './lend-book/lend-book.component';
// Stories
import { Story1Component } from './stories/story1/story1.component';
import { Story2Component } from './stories/story2/story2.component';
import { Story6aComponent } from './stories/story6a/story6a.component';
import { ProfileComponent } from './profile/profile.component';
import { Story11Component } from './stories/story11/story11.component';



@NgModule({
  declarations: [
    Story1Component,
    Story2Component,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    BookOverviewComponent,
    BookDetailsComponent,
    RegisterMemberComponent,
    LogoutComponent,
    Story6aComponent,
    LendBookComponent,
    ProfileComponent,
    Story11Component,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
  providers: []
})
export class LayoutModule { }
