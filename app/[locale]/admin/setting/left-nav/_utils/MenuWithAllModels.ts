import { AdminMenu, Element, MenuParent, User } from "@prisma/client";

// Extended Element type to include nested subElements and parent
export type ElementWithSubElements = Element & {
  subElements?: ElementWithSubElements[];
  parent?: ElementWithSubElements | null;
};

// AdminMenu type with related models and elements
export type MenuWithAllModels = AdminMenu & {
  elements: ElementWithSubElements[];
  user: User;
  menuParent: MenuParent;
};
