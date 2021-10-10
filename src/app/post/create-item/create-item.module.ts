import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateRoutingModule} from "./create-routing.module";
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {CommentDialog, CreateCommentDialogComponent} from './create-comment-dialog/create-comment-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    CreatePostComponent,
    CreateCategoryComponent,
    CreateCommentDialogComponent,
    CommentDialog
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class CreateItemModule { }
