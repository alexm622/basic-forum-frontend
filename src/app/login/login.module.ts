import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginDialog, LoginEntryComponent} from "./login-entry.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [
    LoginEntryComponent,
    LoginDialog
  ],
  id: "login-dialogue",
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,

  ]
})
export class LoginModule { }
