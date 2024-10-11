import { Category, Media, Price, Product, Tag, User } from "@prisma/client";

export type ProductWithModels = Product & {
    categories: Category[],
    tags : Tag[]
    media : Media[]
    prices : Price[],
    user : User
  };

