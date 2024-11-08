import { Package, PackageFeature, PackageFeatureLink, PlanCategory } from "@prisma/client";

export type PackageForFront = Package & {
  features: (PackageFeatureLink & {
    feature: PackageFeature; // Include the actual PackageFeature data
  })[];
};