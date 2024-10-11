import { z } from "zod";

export const BasicSchema = z.object({
    name: z.string().min(3),
    nameAr: z.string(),
    description: z.string().min(1),
    descriptionAr: z.string(),
    price : z.string(),
    title : z.string().min(1),
    titleAr : z.string()
  })