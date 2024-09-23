import { z } from "zod";


export const SectionSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  titleAr: z.string().optional(),
  desc: z.string().optional(),
  descAr: z.string().optional(),
  more: z.string().optional(),
  moreAr: z.string().optional(),
  itemsNo: z.coerce.number().int().min(1).optional(),
  isActive: z.string().optional(),
  url: z.string().optional(),

});
