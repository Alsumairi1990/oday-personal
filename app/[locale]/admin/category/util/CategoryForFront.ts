import { Category, Service, ServiceCategory, WorkCategory, Work, Product, Client } from "@prisma/client";
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";

export type CategoryForFront = Category & {
  services: (ServiceCategory & { service: Service })[];
  works: (WorkCategory & { service: Work })[];
  products: Product[]; // Add products directly related to Category
  clients : Client[];
  phases : PhaseWithModels[];
};
