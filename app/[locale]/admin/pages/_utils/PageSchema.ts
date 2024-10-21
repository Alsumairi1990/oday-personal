import { z } from "zod";

export const PageSchema = z.object({
    name: z.string(),
    nameAr : z.string(),
    description: z.string(),
    descriptionAr: z.string(),
    title : z.string().min(1),
    titleAr : z.string(),
    image: z
    .custom<File>(
      (file) => {
        return true;
      },
      {
        message:
          "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB.",
      }
    ),
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
    
  })