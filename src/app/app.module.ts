import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {LoginComponent, LoginDialog} from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CategoryComponent } from './category/category.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialog,
    NavbarComponent,
    LoggedInComponent,
    PostComponent,
    CommentComponent,
    CategoryComponent,
    FrontpageComponent,
    LoginPageComponent,
    HomeComponent,
    RegisterComponent,
    CategoriesComponent,
    PostsComponent,
    CategoryItemComponent,
    PostItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
