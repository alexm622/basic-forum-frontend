import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";



import {CategoriesComponent} from "./categories/categories.component";
import {PostComponent} from "./post.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  { path: 'c/:page', component: CategoriesComponent},
  { path: 'c/:page/new', loadChildren: () => import(/*webpackChunkName: "create" */'./create-item/create-item.module').then(m => m.CreateItemModule)},
  { path: 'c/:cat_id/:page', component:PostsComponent},
  { path: 'c/:cat_id/:page/new', loadChildren: () => import(/*webpackChunkName: "create" */'./create-item/create-item.module').then(m => m.CreateItemModule)},
  { path: 'p/:cat_id/:post_id', component: PostComponent},
  { path: 'p/:cat_id/:post_id/new', loadChildren: () => import(/*webpackChunkName: "create" */'./create-item/create-item.module').then(m => m.CreateItemModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: []
})
export class PostRoutingModule {}
