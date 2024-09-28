import { Category, Service, ServiceCategory, WorkCategory, Work, Product } from "@prisma/client";

export type CategoryForFront = Category & {
  services: (ServiceCategory & { service: Service })[];
  works: (WorkCategory & { service: Work })[];
  products: Product[]; // Add products directly related to Category
};
