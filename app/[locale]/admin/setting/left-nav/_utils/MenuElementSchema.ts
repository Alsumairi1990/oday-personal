import { z } from "zod";

export const MenuElementSchema = z.object({
    title: z.string().min(3),
    titleAr: z.string().min(1).optional(),
    link: z.string().min(3),
    description: z.string().min(1),
    descriptionAr: z.string().min(1).optional(),
    icon: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    
  })