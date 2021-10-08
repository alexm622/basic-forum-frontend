import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { NavbarComponent } from './navbar/navbar.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoggedInComponent,
    FrontpageComponent,
    LoginPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
