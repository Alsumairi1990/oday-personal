import { Plan, PlanCategory } from "@prisma/client";
import { PackageForFront } from "./PackageForFront";

export type PackageCatForFront = PlanCategory & {
  packages: PackageForFront[],
  _count: {
    packages: number; // Count of services related to the category
  };
};