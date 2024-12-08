import { Category, Tool } from "@prisma/client";

export type ToolForFront = Tool & {
    category : Category[]
 };