import {NgModule} from '@angular/core';
import {Story1Component} from "./layout/stories/story1/story1.component";
import {Story2Component} from "./layout/stories/story2/story2.component";
import {Story3Component} from "./layout/stories/story3/story3.component";
import {Story4Component} from "./layout/stories/story4/story4.component";
import {Story5Component} from "./layout/stories/story5/story5.component";
import {Story6aComponent} from "./layout/stories/story6a/story6a.component";
import {Story7Component} from "./layout/stories/story7/story7.component";
import {Story8Component} from "./layout/stories/story8/story8.component";
import {Story9Component} from "./layout/stories/story9/story9.component";
import {Story10aComponent} from "./layout/stories/story10a/story10a.component";
import {Story10bComponent} from "./layout/stories/story10b/story10b.component";
import {Story10cComponent} from "./layout/stories/story10c/story10c.component";
import {Story11Component} from "./layout/stories/story11/story11.component";
import {Story12Component} from "./layout/stories/story12/story12.component";
import {Story13Component} from "./layout/stories/story13/story13.component";
import {Story14Component} from "./layout/stories/story14/story14.component";
import {Story15Component} from "./layout/stories/story15/story15.component";

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layout/home/home.component";
import {BookOverviewComponent} from "./layout/overviews/book-overview/book-overview.component";
import {BookDetailsComponent} from "./layout/book-details/book-details.component";
import {RegisterMemberComponent} from "./layout/register/register-member/register-member.component";
import {LoginComponent} from "./layout/login/login.component";
import {ProfileComponent} from "./layout/profile/profile.component";
import {ReturnBookComponent} from "./layout/return-book/return-book.component";
import {LibrarianOverviewComponent} from "./layout/overviews/librarian-overview/librarian-overview.component";
import {AdminOverviewComponent} from "./layout/overviews/admin-overview/admin-overview.component";
import {RegisterLibrarianComponent} from "./layout/register/register-librarian/register-librarian.component";
import {RegisterAdminComponent} from "./layout/register/register-admin/register-admin.component";
import {MemberOverviewComponent} from "./layout/overviews/member-overview/member-overview.component";
import {RegisterBookComponent} from "./layout/register/register-book/register-book.component";
import {AuthGuardServiceLibrarianService} from "./serviceAuth/auth-guard-service-librarian.service";
import {AuthGuardServiceMemberService} from "./serviceAuth/auth-guard-service-member.service";
import {AuthGuardServiceAdminService} from "./serviceAuth/auth-guard-service-admin.service";
import {OverdueBooksComponent} from "./layout/overdue-books/overdue-books.component";
import {UpdateBookComponent} from "./layout/update-book/update-book.component";
import {DeleteBookComponent} from "./layout/delete-book/delete-book.component";
import {HistoryComponent} from "./layout/history/history.component";
import {Story17Component} from "./layout/stories/story17/story17.component";
import {Story18Component} from "./layout/stories/story18/story18.component";
import {Story19Component} from "./layout/stories/story19/story19.component";
import {Story21Component} from "./layout/stories/story21/story21.component";
import {Story20Component} from "./layout/stories/story20/story20.component";
import {Story16Component} from "./layout/stories/story16/story16.component";
import {StoriesOverviewComponent} from "./layout/stories-overview/stories-overview.component";

var routes: Routes = [
  // The Story instructions:
  {path: 'story1', component: Story1Component},
  {path: 'story2', component: Story2Component},
  {path: 'story3', component: Story3Component},
  {path: 'story4', component: Story4Component},
  {path: 'story5', component: Story5Component},
  {path: 'story6A', component: Story6aComponent},
  {path: 'story7', component: Story7Component},
  {path: 'story8', component: Story8Component},
  {path: 'story9', component: Story9Component},
  {path: 'story10A', component: Story10aComponent},
  {path: 'story10B', component: Story10bComponent},
  {path: 'story10C', component: Story10cComponent},
  {path: 'story11', component: Story11Component},
  {path: 'story12', component: Story12Component},
  {path: 'story13', component: Story13Component},
  {path: 'story14', component: Story14Component},
  {path: 'story15', component: Story15Component},
  {path: 'story16', component: Story16Component},
  {path: 'story17', component: Story17Component},
  {path: 'story18', component: Story18Component},
  {path: 'story19', component: Story19Component},
  {path: 'story20', component: Story20Component},
  {path: 'story21', component: Story21Component},

  // All other paths:
  {path: 'stories', component: StoriesOverviewComponent},
  {path: 'books', component: BookOverviewComponent},
  {path: 'books/add', component: RegisterBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/overdue', component: OverdueBooksComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'books/:isbn/update', component: UpdateBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/:isbn/delete', component: DeleteBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/:id/:isbn/lent', component: ProfileComponent, canActivate: [AuthGuardServiceMemberService]},
  {path: 'books/:id/:lendingId/return', component: ReturnBookComponent, canActivate: [AuthGuardServiceMemberService]},
  {path: 'books/:isbn/history', component: HistoryComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'members', component: MemberOverviewComponent, canActivate: [AuthGuardServiceAdminService]},
  {path: 'memberOverview', component: MemberOverviewComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'members/add', component: RegisterMemberComponent},
  {path: 'members/:id', component: ProfileComponent, canActivate: [AuthGuardServiceMemberService]},
  {path: 'memberOverview/:id', component: ProfileComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'librarians', component: LibrarianOverviewComponent, canActivate: [AuthGuardServiceAdminService]},
  {path: 'librarians/add', component: RegisterLibrarianComponent, canActivate: [AuthGuardServiceAdminService]},
  {path: 'admins', component: AdminOverviewComponent, canActivate: [AuthGuardServiceAdminService]},
  {path: 'admins/add', component: RegisterAdminComponent, canActivate: [AuthGuardServiceAdminService]},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
