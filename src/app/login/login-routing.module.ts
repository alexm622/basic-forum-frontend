import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginEntryComponent} from "./login-entry.component";





const routes: Routes = [
  { path: '', component: LoginEntryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class LoginRoutingModule {}
