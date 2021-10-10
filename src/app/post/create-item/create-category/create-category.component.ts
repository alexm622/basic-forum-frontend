import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor() { }

  public cat_name:string = "";
  public cat_desc:string = "";
  public cat_good:boolean = false;

  ngOnInit(): void {
  }

  cat_changed() {
    //something to see if category exists
  }

  submit() {

  }
}
