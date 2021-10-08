import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  { path: 'register', loadChildren: () => import(/*webpackChunkName: "register-page" */ './register/register.module').then(m => m.RegisterModule)},
  { path: '', component: HomeComponent},
  { path: 'login', loadChildren: () => import(/*webpackChunkName: "loginDialog" */ './login/login.module').then(m => m.LoginModule)},
  { path: 'content', loadChildren: () => import(/*webpackChunkName: "posts" */'./post/post.module').then(m => m.PostModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class AppRoutingModule {}
