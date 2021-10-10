import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post.component";
import {CommentComponent} from "./comment/comment.component";
import {CategoryComponent} from "./category/category.component";
import {PostRoutingModule} from "./post-routing.module";
import {CategoriesComponent} from "./categories/categories.component";
import {PostsComponent} from "./posts/posts.component";
import {CategoryItemComponent} from "./category-item/category-item.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {PagesComponent} from "../pages/pages.component";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PostComponent,
    CommentComponent,
    CategoryComponent,
    CategoriesComponent,
    PostsComponent,
    CategoryItemComponent,
    PostItemComponent,
    PagesComponent,
  ],
    imports: [
        CommonModule,
        PostRoutingModule,
        AngularEditorModule,
        MatButtonModule,

    ]
})
export class PostModule { }
