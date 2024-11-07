import { Package, PackageFeature, Plan, PlanCategory, Service } from "@prisma/client";

export type PackageForFront = Package & {
  features: PackageFeature[];
};