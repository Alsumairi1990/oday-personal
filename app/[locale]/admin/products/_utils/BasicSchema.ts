import { z } from "zod";

export const BasicSchema = z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    stockQuantity : z.coerce.number().int().min(1).optional(),
    isActive : z.string().optional(),
    isPublished : z.string().optional(),
    rating : z.string().min(1).optional(),
    dimensions : z.string().min(1).optional(),
    weight : z.coerce.number().int().min(1).optional(),
    image: z.custom<File>((file) => {    
        return true;
      }, {
        message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
      }).optional(),
  })