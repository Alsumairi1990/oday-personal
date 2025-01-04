import { Category, Feature, Post, Service, ServiceTool, Tool, Work, WorkTool } from "@prisma/client";

export type ToolSingle = Tool & {
    categories : Category[],
    Feature : Feature[],
    services: (ServiceTool & { service: Service })[],
    works : (WorkTool & { work: Work })[],
    posts : Post[]
 };