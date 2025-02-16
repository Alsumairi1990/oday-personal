import { Category, Service, ServiceCategory, WorkCategory, Work, Product, Client, Tool, Industry, Testimonial, TestimonialCategory, Project } from "@prisma/client";
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";

export type CategoryForFront = Category & {
  services: (ServiceCategory & { service: Service })[];
  works: (WorkCategory & { service: Work })[];
  products: Product[]; // Add products directly related to Category
  clients : Client[];
  tools : Tool[],
  industries  : Industry[],
  phases : PhaseWithModels[];
  projects : Project[],
  testimonials: (TestimonialCategory & { testimonial: Testimonial})[];

};
