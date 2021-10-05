import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private  page:number = 1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.page = parseInt(this.route.snapshot.paramMap.get("page") ?? "0");
    if(this.page == 0){
      this.router.navigate(["/categories/1"]).finally();
    }
  }

}
