import { z } from "zod";

const OrderType = z.enum(["Product", "Service"]);

export const MainPageSchema = z.object({
  HeroTitle: z.string().optional(),
  HeroTitleAr: z.string().optional(),
  HeroSubTitle: z.string().optional(),
  HeroSubTitleAr: z.string().optional(),
  HeroImageURL: z.string().optional(),

  ServiceCatSectTitle: z.string().optional(),
  ServiceCatSectTitleAr: z.string().optional(),
  ServiceCatSectDesc: z.string().optional(),
  ServiceCatSectDescAr: z.string().optional(),
  ServiceCatSectMore: z.string().optional(),
  ServiceCatSectMoreAr: z.string().optional(),
  ServiceCatSectNo: z.coerce.number().int().min(1).optional(),
  ServiceCatSectActive: z.string().optional(),

  ServiceSectTitle: z.string().optional(),
  ServiceSectTitleAr: z.string().optional(),
  ServiceSectDesc: z.string().optional(),
  ServiceSectDescAr: z.string().optional(),
  ServiceSectMore: z.string().optional(),
  ServiceSectMoreAr: z.string().optional(),
  ServiceSectNo: z.coerce.number().int().min(1).optional(),
  ServiceSectActive: z.string().optional(),


  BlogSectTitle: z.string().optional(),
  BlogSectTitleAr: z.string().optional(),
  BlogSectDesc: z.string().optional(),
  BlogSectDescAr: z.string().optional(),
  BlogSectMore: z.string().optional(),
  BlogSectMoreAr: z.string().optional(),
  BlogSectNo: z.coerce.number().int().min(1).optional(),
  BlogSectActive: z.string().optional(),


  WorkMethSectTitle: z.string().optional(),
  WorkMethSectTitleAr: z.string().optional(),
  WorkMethSectDesc: z.string().optional(),
  WorkMethSectDescAr: z.string().optional(),
  WorkMethSectMore: z.string().optional(),
  WorkMethSectMoreAr: z.string().optional(),
  WorkMethSectNo: z.coerce.number().int().min(1).optional(),
  WorkMethSectActive: z.string().optional(),

  WorkSectTitle: z.string().optional(),
  WorkSectTitleAr: z.string().optional(),
  WorkSectDesc: z.string().optional(),
  WorkSectDescAr: z.string().optional(),
  WorkSectMore: z.string().optional(),
  WorkSectMoreAr: z.string().optional(),
  WorkSectNo: z.coerce.number().int().min(1).optional(),
  WorkSectActive: z.string().optional(),

  TestimonialSectTitle: z.string().optional(),
  TestimonialSectTitleAr: z.string().optional(),
  TestimonialSectDesc: z.string().optional(),
  TestimonialSectDescAr: z.string().optional(),
  TestimonialSectMore: z.string().optional(),
  TestimonialSectMoreAr: z.string().optional(),
  TestimonialSectNo: z.coerce.number().int().min(1).optional(),
  TestimonialSectActive: z.string().optional(),

  

 

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
