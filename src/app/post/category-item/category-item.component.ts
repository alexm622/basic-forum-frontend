import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  constructor() { }

  @Input() cat_id:number = 0;
  @Input() cat_desc:string = "description";
  @Input() cat_name:string = "Category Name";

  ngOnInit(): void {
  }

}
