import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";



import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
