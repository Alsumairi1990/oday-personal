import validator from "validator";
import { z } from "zod";

export const ContactInfoSchema = z.object({
    country : z.string().min(4, "Country Must be at least 2 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    city : z.string().min(2, "Last Name Must be at least 4 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    address : z.string(),
    postalCode : z.string(),
});