import { z } from "zod";

export const SocialsSchema = z.object({
    facebook : z.string().min(2, " Must be at least 2 chars"),
    x : z.string().min(2, "Must be at least 2 chars"),
    github: z.string().min(2, "Must be at least 2 chars"),
    youtube: z.string().min(2, "Must be at least 2 chars"),
    website: z.string().min(2, "Must be at least 2 chars"),
    instagram: z.string().min(2, "Must be at least 2 chars"),
    pinterest: z.string().min(2, "Must be at least 2 chars"),
    reddit: z.string().min(2, "Must be at least 2 chars"),
    tikTok: z.string().min(2, "Must be at least 2 chars"),
    snapchat: z.string().min(2, "Must be at least 2 chars"),
    linkedin : z.string(),
});