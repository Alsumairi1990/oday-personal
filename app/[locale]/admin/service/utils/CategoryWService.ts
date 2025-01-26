import { Category, Service, ServiceCategory } from "@prisma/client";

export type CategoryWService = Category & {
  services: (ServiceCategory & { service: Service })[];
};
