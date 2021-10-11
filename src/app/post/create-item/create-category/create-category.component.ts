import { Component, OnInit } from '@angular/core';
import {NewCat, NewCategory, SendCat} from "../../../api/SendData";
import {HttpClient} from "@angular/common/http";
import {BasicResponse} from "../../../api/Response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public nc:NewCat;
  constructor(public http:HttpClient, private router: Router,
              private route: ActivatedRoute) {
    this.nc = new NewCat(this.http);
  }

  public cat_name:string = "";
  public cat_desc:string = "";
  public cat_good:boolean = false;

  ngOnInit(): void {
  }

  cat_changed() {
    this.nc.check_cat(this.cat_name).then( r=> {
      this.cat_good = r.exists;
      console.log("category good?" + this.cat_good);
    })
  }

  submit() {
    let catObj:NewCategory = {
      name: this.cat_name,
      desc: this.cat_desc,
      user: Number.parseInt(localStorage.getItem("uid") ?? "0"),
      user_token: localStorage.getItem("token") ?? "none",
    }
    let cc:SendCat = new SendCat(catObj, this.http);
    let resp:BasicResponse | undefined;
    cc.send().then( r =>{
      resp = r;
      console.log("the value for the response is: " + r.response_code);
      if(r.redirect == undefined){
        this.router.navigate(['/content/c/1]).finally()']).finally();
      }else {
        this.router.navigate(['/content/c/' + r.redirect + '/1']).finally();
      }
    })
  }
}
