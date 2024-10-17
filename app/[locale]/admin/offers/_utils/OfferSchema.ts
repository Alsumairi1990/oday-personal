import { z } from "zod";

export const OfferSchema = z.object({
    description: z.string(),
    descriptionAr: z.string(),
    title : z.string().min(1),
    titleAr : z.string(),
    // discount : z.number(),
    discount : z.coerce.number().int().min(1),

    startDate : z.coerce.date(),
    endDate : z.coerce.date(),
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