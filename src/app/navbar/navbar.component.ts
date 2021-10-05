import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  eventSubject: Subject<void> = new Subject<void>();
  constructor() { }
  loggedIn:boolean = false;

  ngOnInit(): void {
    this.loggedIn = this.loggedInCheck()
  }

  loggedInCheck(): boolean{
    let uname:string = (localStorage.getItem("uname") ?? "none");
    return uname != "none";

  }

  loginEvent(childEvent:boolean){
    this.loggedIn = childEvent;
    this.eventSubject.next();
  }

}
