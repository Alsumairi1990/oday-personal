import { z } from "zod";


export const FeaturesSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  titleAr: z.string().optional(),
  desc: z.string().optional(),
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
  descAr: z.string().optional(),
  more: z.string().optional(),
  moreAr: z.string().optional(),
  url: z.string().optional(),

});
