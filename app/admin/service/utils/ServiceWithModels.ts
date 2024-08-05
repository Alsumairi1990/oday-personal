import { Category, Phase, Price, Service, ServiceCategory, ServiceTag, ServiceTool, Tag, Tool, User, Work } from "@prisma/client";

export type ServiceWithModels = Service & {
    categories: (ServiceCategory & { category: Category })[],
    tags : (ServiceTag & { tag: Tag })[],
    tools : (ServiceTool & { tool: Tool })[],
    works: Work[],
    phases : Phase[],
    prices : Price[],
    user : User
  };

