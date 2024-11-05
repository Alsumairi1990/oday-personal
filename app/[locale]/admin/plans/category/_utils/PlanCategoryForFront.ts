import { Plan, PlanCategory } from "@prisma/client";
import { PlanForFront } from "../../_utils/PlanForFront";

export type PlanCategoryForFront = PlanCategory & {
  plans: PlanForFront[],
  _count: {
    plans: number; // Count of services related to the category
  };
};