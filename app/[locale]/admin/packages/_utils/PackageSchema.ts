import { z } from "zod";

export const PackageSchema = z.object({
  name: z.string(),
  nameAr : z.string(),
  description: z.string(),
  descriptionAr : z.string(),
  price: z.coerce.number().int().min(1),
  isPopular: z.string(),
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


