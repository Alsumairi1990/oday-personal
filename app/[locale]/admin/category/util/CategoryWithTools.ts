import { Category, Tool } from "@prisma/client";

export type CategoryWithTools = Category & { 
  tools : Tool[];
};
