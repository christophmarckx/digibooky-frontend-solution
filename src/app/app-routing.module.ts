import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout/layout.component";
import {Story1Component} from "./layout/stories/story1/story1.component";
import {BookOverviewComponent} from "./layout/book-overview/book-overview.component";
import {BookDetailsComponent} from "./layout/book-details/book-details.component";


const routes: Routes = [
  // The Story instructions:
  {path: 'story1', component: Story1Component},
  //All other paths:
  {path: '', component: LayoutComponent},
  {path: 'books', component: BookOverviewComponent},
  {path: 'books/:isbn', component: BookDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
