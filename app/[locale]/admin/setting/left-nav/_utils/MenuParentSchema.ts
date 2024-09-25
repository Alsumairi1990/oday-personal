import { z } from "zod";

export const MenuParentSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1).optional(),
    titleAr: z.string().min(1).optional(),
    descriptionAr: z.string().min(1).optional(),
    priority : z.coerce.number().int().min(1),
    icon: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    
  })