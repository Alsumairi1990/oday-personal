import { Category, Service, ServiceCategory, Work, Product, Client, ServiceTool, Tool, ServiceTag, Tag, Testimonial, Industry, ServiceFeature, Plan, Offer } from "@prisma/client";
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";
import { PackageForFront } from "../../packages/_utils/PackageForFront";

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
  features : ServiceFeature[],
  plans : Plan[]
  packages : PackageForFront[],
  offers : Offer[],
};
