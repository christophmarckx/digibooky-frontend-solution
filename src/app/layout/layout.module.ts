import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { BookOverviewComponent } from './overviews/book-overview/book-overview.component';
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
import { ReturnBookComponent } from './return-book/return-book.component';
import { LibrarianOverviewComponent } from './overviews/librarian-overview/librarian-overview.component';
import { AdminOverviewComponent } from './overviews/admin-overview/admin-overview.component';
import { RegisterAdminComponent } from './register/register-admin/register-admin.component';
import { RegisterLibrarianComponent } from './register/register-librarian/register-librarian.component';
import { RegisterBookComponent } from './register/register-book/register-book.component';
import { MemberOverviewComponent } from './overviews/member-overview/member-overview.component';
import { Story12Component } from './stories/story12/story12.component';
import { Story9Component } from './stories/story9/story9.component';
import { Story8Component } from './stories/story8/story8.component';
import { Story10aComponent } from './stories/story10a/story10a.component';



@NgModule({
  declarations: [
    Story1Component,
    Story2Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BookOverviewComponent,
    BookDetailsComponent,
    RegisterMemberComponent,
    LogoutComponent,
    Story6aComponent,
    LendBookComponent,
    ProfileComponent,
    Story11Component,
    ReturnBookComponent,
    LibrarianOverviewComponent,
    AdminOverviewComponent,
    RegisterAdminComponent,
    RegisterLibrarianComponent,
    RegisterBookComponent,
    MemberOverviewComponent,
    Story12Component,
    Story9Component,
    Story8Component,
    Story10aComponent,
  ],
  exports: [
    HomeComponent,
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
