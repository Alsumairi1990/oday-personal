import { z } from "zod";

export const PackageFeatureSchema = z.object({
  name: z.string(),
  nameAr : z.string(),
  value: z.string(),
  valueAr : z.string(),
  description: z.string(),
  descriptionAr : z.string(),
  included : z.string(),
});


