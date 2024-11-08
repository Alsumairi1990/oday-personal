import { PlanCategory } from "@prisma/client";
import { PackageForFront } from "../../../packages/_utils/PackageForFront";

export type PlanCatPackForFront = PlanCategory & {
  packages: PackageForFront[];
};
