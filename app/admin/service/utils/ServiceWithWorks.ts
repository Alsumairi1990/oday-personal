import { Service, Work } from "@prisma/client";

export type ServiceWithWorks = Service & {
    works: Work[];  
};