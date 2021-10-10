import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CreatePostComponent} from "./create-post/create-post.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {CreateCommentDialogComponent} from "./create-comment-dialog/create-comment-dialog.component";




const routes: Routes = [
  { path: '', component: CreateCategoryComponent},
  { path: ':cat_id', component: CreatePostComponent},
  { path: ':cat_id/:post_id/:parent_id', component: CreateCommentDialogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class CreateRoutingModule {}
