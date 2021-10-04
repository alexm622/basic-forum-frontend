import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";



import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
