
import { AdminMenu, Element, MenuParent, User } from "@prisma/client";
export type MenuWithModels = AdminMenu & {
    elements  : Element[] 
    user : User,
    parent : MenuParent
  };

