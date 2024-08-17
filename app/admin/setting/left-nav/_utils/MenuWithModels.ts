import { AdminMenu, Element, User } from "@prisma/client";
export type MenuWithModels = AdminMenu & {
    elements  : Element[] 
    user : User,
  };

