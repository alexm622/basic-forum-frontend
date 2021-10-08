import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";



import {CategoriesComponent} from "./categories/categories.component";
import {PostComponent} from "./post.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  { path: ':page', component: CategoriesComponent},
  { path: ':cat_id/:page', component:PostsComponent},
  { path: ':cat_id/:post_id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class PostRoutingModule {}
