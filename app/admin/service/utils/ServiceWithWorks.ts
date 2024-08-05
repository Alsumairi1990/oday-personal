import { Service, Work } from "@prisma/client";

export type ServiceWithW = Service & {
    works: Work[];  };