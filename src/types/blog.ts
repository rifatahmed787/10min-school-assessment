import { IUser } from "./auth.types";

export interface IBlogCategory {
  id: string;
  name: string;
  posts?: IBlog[]; 
}


export interface IPostComment {
  id: string;
  comment: string;
  post_id: string;
  commenterId: string;
  commenter: IUser;
}

export interface IPostLike {
  id: string;
  like: number;
  post_id: string;
  likerId: string;
  liker: IUser;
}

export interface IBlog {
  id: string;
  title: string;
  slug: string;
  content?: string;
  image: string;
  published: boolean;
  author_id: string;
  author: IUser;
  category_id: string;
  category: IBlogCategory;
  createdAt: string; 
  updatedAt: string; 
  comments?: IPostComment[];
  likes?: IPostLike[];
}
