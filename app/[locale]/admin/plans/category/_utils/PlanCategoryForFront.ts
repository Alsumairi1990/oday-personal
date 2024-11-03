import { Plan, PlanCategory } from "@prisma/client";

export type PlanCategoryForFront = PlanCategory & {
  plans: Plan[],
  _count: {
    plans: number; // Count of services related to the category
  };
};