import { z } from "zod";
const BillingInterval = z.enum([
  "MONTHLY",
  "SEMI_ANNUAL",
  "YEARLY",
]);
export const PlanSchema = z.object({
  name: z.string(),
  nameAr : z.string(),
  description: z.string(),
  descriptionAr : z.string(),
  interval: BillingInterval,
  monthlyPrice: z.coerce.number().int().min(1),  
  duration: z.coerce.number().int().min(1), 
  semiAnnualPrice: z.coerce.number().int().min(1),
  yearlyPrice: z.coerce.number().int().min(1).optional(),
  features: z.string(),
  featuresAr: z.string(),
  limits: z.string(),
  support : z.string(),
  supportAr : z.string(),
  limitsAr: z.string(),
  purpose: z.string(),
  purposeAr: z.string(),
  image: z
    .custom<File>(
      (file) => {
        return true;
      },
      {
        message:
          "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB.",
      }
    )
    .optional(),
    icon: z
    .custom<File>(
      (file) => {
        return true;
      },
      {
        message:
          "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB.",
      }
    )
    .optional(),
});


