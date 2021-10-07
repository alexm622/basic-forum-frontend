import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {CategoriesComponent} from "./categories/categories.component";
import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent},
  { path: 'categories/:page', component: CategoriesComponent},
  { path: 'category/:cat_id/:page', component:PostsComponent},
  { path: 'post/:cat_id/:post_id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
