import { Category, Location, Service, Tag, Tool, User, Work, WorkCategory, WorkTag, WorkTool } from "@prisma/client";

export type WorkWithModels = Work & {
    categories: (WorkCategory & { category: Category })[],
    tags : (WorkTag & { tag: Tag })[],
    tools : (WorkTool & { tool: Tool })[],
    user : User
    service : Service
    location : Location
  };