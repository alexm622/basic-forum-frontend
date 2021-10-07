import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  constructor() { }
  @Input() post_id:number = 0;
  @Input() cat_id:number = 0;
  @Input() post_content:string = "content";
  @Input() post_name:string = "Post Name";

  ngOnInit(): void {
  }

}
