import { z } from "zod";
import { formSchema } from "./formSchema";

export type inputType = z.infer<typeof formSchema>;