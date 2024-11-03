import { Plan, PlanCategory, Service } from "@prisma/client";

export type PlanForFront = Plan & {
  categories: PlanCategory[];
  services: Service[];
};