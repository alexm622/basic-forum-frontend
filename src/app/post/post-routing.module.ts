import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";



import {CategoriesComponent} from "./categories/categories.component";
import {PostComponent} from "./post.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  { path: 'c/:page', component: CategoriesComponent},
  { path: 'c/:cat_id/:page', component:PostsComponent},
  { path: 'p/:cat_id/:post_id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class PostRoutingModule {}