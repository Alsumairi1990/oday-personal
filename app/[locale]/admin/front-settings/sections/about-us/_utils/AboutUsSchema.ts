import { z } from "zod";

export const AboutUsSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(1),
    descriptionAr: z.string(),
    title : z.string().min(1),
    titleAr : z.string(),
    url : z.string(),
    topTitle : z.string(),
    topTitlAr : z.string(),
    more : z.string(),
    moreAr : z.string(),
    isActive : z.string(),
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
    
  })