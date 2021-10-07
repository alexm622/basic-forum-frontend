export interface Category{
  cat_id:number;
  cat_name:string;
  cat_desc:string;
}

export interface Post{
  post_id:number;
  name:string;
  content:string;
  creator_id:number;
  creation_date:number;
}


export interface UserComment {
  comment_id:number;
  content:string;
  creator_id:number;
  creation_date:number;
}
