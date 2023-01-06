import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {BookOverviewComponent} from './overviews/book-overview/book-overview.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {RegisterMemberComponent} from './register/register-member/register-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LendBookComponent} from './lend-book/lend-book.component';
// Stories
import {Story1Component} from './stories/story1/story1.component';
import {Story2Component} from './stories/story2/story2.component';
import {Story6aComponent} from './stories/story6a/story6a.component';
import {ProfileComponent} from './profile/profile.component';
import {Story11Component} from './stories/story11/story11.component';
import {ReturnBookComponent} from './return-book/return-book.component';
import {LibrarianOverviewComponent} from './overviews/librarian-overview/librarian-overview.component';
import {AdminOverviewComponent} from './overviews/admin-overview/admin-overview.component';
import {RegisterAdminComponent} from './register/register-admin/register-admin.component';
import {RegisterLibrarianComponent} from './register/register-librarian/register-librarian.component';
import {RegisterBookComponent} from './register/register-book/register-book.component';
import {MemberOverviewComponent} from './overviews/member-overview/member-overview.component';
import {Story12Component} from './stories/story12/story12.component';
import {Story9Component} from './stories/story9/story9.component';
import {Story8Component} from './stories/story8/story8.component';
import {Story10aComponent} from './stories/story10a/story10a.component';
import {OverdueBooksComponent} from './overdue-books/overdue-books.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {HistoryComponent} from './history/history.component';
import {Story3Component} from './stories/story3/story3.component';
import {Story4Component} from './stories/story4/story4.component';
import {Story5Component} from './stories/story5/story5.component';
import {Story7Component} from './stories/story7/story7.component';
import {Story10bComponent} from './stories/story10b/story10b.component';
import {Story10cComponent} from './stories/story10c/story10c.component';
import {Story13Component} from './stories/story13/story13.component';
import {Story14Component} from './stories/story14/story14.component';
import {Story15Component} from './stories/story15/story15.component';
import {Story17Component} from './stories/story17/story17.component';
import {Story18Component} from './stories/story18/story18.component';
import {Story19Component} from './stories/story19/story19.component';
import {Story20Component} from './stories/story20/story20.component';
import {Story21Component} from './stories/story21/story21.component';
import {Story16Component} from './stories/story16/story16.component';
import {StoriesOverviewComponent} from './stories-overview/stories-overview.component';
import {ChangeDateComponent} from "./change-date/change-date.component";


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
    OverdueBooksComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    HistoryComponent,
    Story3Component,
    Story4Component,
    Story5Component,
    Story7Component,
    Story10bComponent,
    Story10cComponent,
    Story13Component,
    Story14Component,
    Story15Component,
    Story17Component,
    Story18Component,
    Story19Component,
    Story20Component,
    Story21Component,
    Story16Component,
    StoriesOverviewComponent,
    ChangeDateComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
      NgbAlertModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule
    ],
  providers: []
})
export class LayoutModule { }
