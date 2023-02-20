import {inject, NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {Story1Component} from "./components/stories/story1/story1.component";
import {Story2Component} from "./components/stories/story2/story2.component";
import {Story3Component} from "./components/stories/story3/story3.component";
import {StoriesOverviewComponent} from "./components/stories/stories-overview/stories-overview.component";
import {BookOverviewComponent} from "./components/book/book-overview/book-overview.component";
import {RegisterBookComponent} from "./components/book/register-book/register-book.component";
import {AuthGuardServiceLibrarianService} from "./services/serviceAuth/auth-guard-service-librarian.service";
import {OverdueBooksComponent} from "./components/book/overdue-books/overdue-books.component";
import {BookDetailsComponent} from "./components/book/book-details/book-details.component";
import {UpdateBookComponent} from "./components/book/update-book/update-book.component";
import {DeleteBookComponent} from "./components/book/delete-book/delete-book.component";
import {ReturnBookComponent} from "./components/book/return-book/return-book.component";
import {AuthGuardServiceMemberService} from "./services/serviceAuth/auth-guard-service-member.service";
import {HistoryComponent} from "./components/book/history/history.component";
import {MemberOverviewComponent} from "./components/user/member-overview/member-overview.component";
import {HomeComponent} from "./components/layout/home/home.component";
import {AuthenticationService} from "./services/serviceLogin/authentication.service";
import {RegisterMemberComponent} from "./components/user/register-member/register-member.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {LibrarianOverviewComponent} from "./components/user/librarian-overview/librarian-overview.component";
import {AuthGuardServiceAdminService} from "./services/serviceAuth/auth-guard-service-admin.service";
import {RegisterLibrarianComponent} from "./components/user/register-librarian/register-librarian.component";
import {AdminOverviewComponent} from "./components/user/admin-overview/admin-overview.component";
import {RegisterAdminComponent} from "./components/user/register-admin/register-admin.component";
import {LoginComponent} from "./components/user/login/login.component";
import {Story4Component} from "./components/stories/story4/story4.component";
import {Story5Component} from "./components/stories/story5/story5.component";
import {Story6aComponent} from "./components/stories/story6a/story6a.component";
import {Story7Component} from "./components/stories/story7/story7.component";
import {Story8Component} from "./components/stories/story8/story8.component";
import {Story10bComponent} from "./components/stories/story10b/story10b.component";
import {Story9Component} from "./components/stories/story9/story9.component";
import {Story10aComponent} from "./components/stories/story10a/story10a.component";
import {Story10cComponent} from "./components/stories/story10c/story10c.component";
import {Story11Component} from "./components/stories/story11/story11.component";
import {Story12Component} from "./components/stories/story12/story12.component";
import {Story13Component} from "./components/stories/story13/story13.component";
import {Story14Component} from "./components/stories/story14/story14.component";
import {Story15Component} from "./components/stories/story15/story15.component";
import {Story16Component} from "./components/stories/story16/story16.component";
import {Story17Component} from "./components/stories/story17/story17.component";
import {Story18Component} from "./components/stories/story18/story18.component";
import {Story19Component} from "./components/stories/story19/story19.component";
import {Story20Component} from "./components/stories/story20/story20.component";
import {Story21Component} from "./components/stories/story21/story21.component";

var routes: Routes = [
  // The Story instructions:
  {path: 'stories/story1', component: Story1Component},
  {path: 'stories/story2', component: Story2Component},
  {path: 'stories/story3', component: Story3Component},
  {path: 'stories/story4', component: Story4Component},
  {path: 'stories/story5', component: Story5Component},
  {path: 'stories/story6A', component: Story6aComponent},
  {path: 'stories/story7', component: Story7Component},
  {path: 'stories/story8', component: Story8Component},
  {path: 'stories/story9', component: Story9Component},
  {path: 'stories/story10A', component: Story10aComponent},
  {path: 'stories/story10B', component: Story10bComponent},
  {path: 'stories/story10C', component: Story10cComponent},
  {path: 'stories/story11', component: Story11Component},
  {path: 'stories/story12', component: Story12Component},
  {path: 'stories/story13', component: Story13Component},
  {path: 'stories/story14', component: Story14Component},
  {path: 'stories/story15', component: Story15Component},
  {path: 'stories/story16', component: Story16Component},
  {path: 'stories/story17', component: Story17Component},
  {path: 'stories/story18', component: Story18Component},
  {path: 'stories/story19', component: Story19Component},
  {path: 'stories/story20', component: Story20Component},
  {path: 'stories/story21', component: Story21Component},

  // All other paths:
  {path: 'stories', component: StoriesOverviewComponent},
  {path: 'books', component: BookOverviewComponent},
  {path: 'books/add', component: RegisterBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/overdue', component: OverdueBooksComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'books/:isbn/update', component: UpdateBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'books/:isbn/delete', component: DeleteBookComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'lendings/:lendingId/return', component: ReturnBookComponent, canActivate: [AuthGuardServiceMemberService]},
  {path: 'books/:isbn/history', component: HistoryComponent, canActivate: [AuthGuardServiceLibrarianService]},
  {path: 'members', component: MemberOverviewComponent, canActivate: [() => inject(AuthenticationService).isLibrarian() || inject(AuthenticationService).isAdmin()]},
  {path: 'members/add', component: RegisterMemberComponent},
  {path: 'members/:id', component: ProfileComponent, canActivate: [() => inject(AuthenticationService).isLibrarian() || inject(AuthenticationService).isMember()]},
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
