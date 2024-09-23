import { z } from "zod";


export const HeroSectionSchema = z.object({
  title: z.string().optional(),
  titleAr: z.string().optional(),
  subTitl: z.string().optional(),
  subTitlAr: z.string().optional(),
  more: z.string().optional(),
  moreAr: z.string().optional(),
  isActive: z.string().optional(),
  url: z.string().optional(),
  pageName: z.string().optional(),
  footerTitle: z.string().optional(),
  footerTitleAr: z.string().optional(),
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
});
