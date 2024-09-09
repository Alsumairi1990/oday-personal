import { z } from "zod";
const StatusEnum = z.enum([
  "PENDING",
  "IN_PROGRESS",
  "COMPLETED",
  "ON_HOLD",
  "CANCELLED",
]);

const OrderType = z.enum(["Product", "Service"]);

export const BasicSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  orderType: OrderType.optional(),
  status: StatusEnum.optional(),
  quantity: z.coerce.number().int().min(1).optional(),
  clientName: z.string().min(3).optional(),
  clientEmail: z.string().email().optional(),
  clientPhone: z.string().optional(),
  unitPrice: z.coerce.number().int().min(1).optional(),
  estimatedCost: z.coerce.number().int().min(1).optional(),
  subtotal: z.coerce.number().int().min(1).optional(),
  discount: z.coerce.number().int().min(1).optional(),
  taxRate: z.coerce.number().int().min(1).optional(),
  taxAmount: z.coerce.number().int().min(1).optional(),
  totalAmount: z.coerce.number().int().min(1).optional(),
  currency: z.string().optional(),
  paymentTerms: z.string().optional(),
  paymentMethod: z.string().optional(),
  notes: z.string().optional(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

  // isActive: z.string().optional(),
  // isPublished: z.string().optional(),
  // rating: z.string().min(1).optional(),
  // dimensions: z.string().min(1).optional(),
  // weight: z.coerce.number().int().min(1).optional(),
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
