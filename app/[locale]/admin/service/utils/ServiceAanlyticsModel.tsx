import { Service } from "@prisma/client";

export type ServiceAnalticsModel = Service & {
  _count: {
    works: number; // Count of related works
    testimonials: number; // Count of related testimonials
    prices: number; // Count of related prices
    phases: number; // Count of related phases
  };
};
