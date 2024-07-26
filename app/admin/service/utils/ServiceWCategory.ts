import { Category, Service } from "@prisma/client";

export type ServiceWCategory = Service & {
    categories: Category[];
  };