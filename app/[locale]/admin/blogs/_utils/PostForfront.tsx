import { PostCategory, Post } from "@prisma/client";

export type PostForFront = Post & {
  categories: PostCategory[]; 
};
