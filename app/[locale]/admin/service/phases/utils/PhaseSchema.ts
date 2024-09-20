import { z } from "zod";

export const PhaseSchema = z.object({
  
name : z.string().min(4, "Service Name Must be at least 4 chars")
                          .max(45, "Service Name Must less than 45 chars"),
description : z.string().max(1000, "Service Title Must less than 1000 chars"),
sequence : z.string(),
image: z.custom<File>((file) => {
  return true;
}, {
  message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
}),
icon: z.custom<File>((file) => {

  return true;
}, {
  message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
})
})