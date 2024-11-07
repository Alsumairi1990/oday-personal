import { Plan, PlanCategory } from "@prisma/client";
import { PlanForFront } from "../../_utils/PlanForFront";
import { PackageForFront } from "../../../packages/_utils/PackageForFront";

export type PlanCatPackForFront = PlanCategory & {
  packages: PackageForFront[],
};