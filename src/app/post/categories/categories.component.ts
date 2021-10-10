import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryItemComponent} from "../category-item/category-item.component";
import {Categories} from "../../api/GetData";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../api/Objects";
import {Login} from "../../api/Login";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private  page:number = 1;

  constructor(private route: ActivatedRoute, private router: Router,private resolver: ComponentFactoryResolver, private http:HttpClient) {}

  ngOnInit(): void {
    this.page = parseInt(this.route.snapshot.paramMap.get("page") ?? "0");
    if(this.page == 0){
      this.router.navigate(["/categories/1"]).finally();
    }
    this.getCategories();
  }

  //adding new components
  @ViewChild('appendHere',{read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  getCategories(){
    let cats:Categories = new Categories(this.page,this.http);
    let cat_array:Array<Category> | undefined;
    cats.getCategories().then( r=>{
      cat_array = r;
      if(cat_array == undefined){
        this.page -= 1;
        this.router.navigate(["/categories/" + this.page.toString()]).finally();
        return;
      }

      for(let cat of cat_array){
        this.addNewComponent(cat);
      }
    })


  }

  addNewComponent(cat:Category) {
    let childComponent = this.resolver.resolveComponentFactory(CategoryItemComponent);
    this.componentRef = this.target?.createComponent(childComponent);
    if(this.componentRef == undefined){
      return;
    }
    this.componentRef.instance.cat_id = cat.cat_id;
    this.componentRef.instance.cat_desc = cat.cat_desc;
    this.componentRef.instance.cat_name = cat.cat_name;
  }
  loggedInCheck() {
    return Login.loggedInCheck();
  }

}
