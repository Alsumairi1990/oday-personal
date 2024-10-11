import { Category, Service, ServiceCategory } from "@prisma/client";

export type CategoryFrontSingle = Category & {
    services: (ServiceCategory & { service: Service })[];
    _count: {
      services: number; // Count of services related to the category
    };
  };