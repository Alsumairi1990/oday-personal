import { Category, Service, ServiceCategory, WorkCategory, Work, Product, Client, ServiceTool, Tool, ServiceTag, Tag, Testimonial, Industry } from "@prisma/client";
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";

export type ServiceForFront = Service & {
  categories: (ServiceCategory & { category: Category })[];
  tools: (ServiceTool & { tool: Tool })[];
  tags: (ServiceTag & { tag: Tag })[];
  works : Work[],
  products: Product[]; // Add products directly related to Category
  clients : Client[];
  phases : PhaseWithModels[];
  testimonials : Testimonial[];
  industries : Industry[];
};
