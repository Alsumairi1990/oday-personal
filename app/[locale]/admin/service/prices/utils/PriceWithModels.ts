import { Location, Price, Service } from "@prisma/client";

export type PriceWithModels = Price & {
    service: Service,
    location : Location,
  };