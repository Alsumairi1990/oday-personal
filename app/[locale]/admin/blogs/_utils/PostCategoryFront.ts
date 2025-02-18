import { Post, PostCategory } from "@prisma/client";




export type PostCategoryFront = PostCategory & {
 
    pots : Post[];
 
};
