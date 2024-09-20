import { z } from "zod";

export const BasicSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(1),
    price : z.string(),
    title : z.string().min(1)
  })