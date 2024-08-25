import { Category, Service, ServiceCategory } from "@prisma/client";

export type CategoryWithService = Category & {
  services: (ServiceCategory & { service: Service })[];
  _count: {
    services: number;
  };
};
