import { NgModule } from '@angular/core';
import {Story1Component} from "./layout/stories/story1/story1.component";
import {Story2Component} from "./layout/stories/story2/story2.component";
import {Story6aComponent} from "./layout/stories/story6a/story6a.component";
import {Story11Component} from "./layout/stories/story11/story11.component";

import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout/layout.component";
import {BookOverviewComponent} from "./layout/book-overview/book-overview.component";
import {BookDetailsComponent} from "./layout/book-details/book-details.component";
import {RegisterMemberComponent} from "./layout/register/register-member/register-member.component";
import {LoginComponent} from "./layout/login/login.component";
import {LogoutComponent} from "./layout/logout/logout.component";
import {ProfileComponent} from "./layout/profile/profile.component";


const routes: Routes = [
  // The Story instructions:
  {path: 'story1', component: Story1Component},
  {path: 'story2', component: Story2Component},
  {path: 'story6A', component: Story6aComponent},
  {path: 'story11', component: Story11Component},
  // All other paths:
  {path: '', component: LayoutComponent},
  {path: 'books', component: BookOverviewComponent},
  {path: 'books/:isbn', component: BookDetailsComponent},
  {path: 'members', component: RegisterMemberComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'books/:id/:isbn/lent', component: ProfileComponent},
  {path: 'members/:id', component: ProfileComponent},

  // Default path:
  {path: '', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
