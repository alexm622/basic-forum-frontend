import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  private eventsSubscription: Subscription | undefined;
  @Input() login_events: Observable<void> | undefined;


  ngOnInit(): void {
    this.eventsSubscription = this.login_events?.subscribe(() => this.loginEvent()) ?? undefined;
  }
  username:string = "not logged in";

  ngOnDestroy(){
    this.eventsSubscription?.unsubscribe();
  }
  loginEvent(){
    this.username = localStorage.getItem("uname") ?? "not logged in";
  }

}
