import { z } from "zod";

export const PlanCategorySchema = z.object({
  name: z.string(),
  nameAr : z.string(),
  description: z.string(),
  descriptionAr : z.string(),
  title : z.string(),
  titleAr : z.string(),
  subTitle : z.string(),
  subTitleAr : z.string(),
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


