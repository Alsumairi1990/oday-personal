import { Service, Work } from "@prisma/client";

export type ServicesWWorks = Service & {
  works: Work[];
  _count: {
    works: number;
  };
};
