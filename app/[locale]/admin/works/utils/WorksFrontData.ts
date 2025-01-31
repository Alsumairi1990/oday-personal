import { Work } from "@prisma/client";

export type WorksFrontData = Work & {
    categories: {
      category: {
        name: string;
        nameAr: string; 
      };
    }[];
    services: {
      name: string; 
      nameAr: string;
    };
  };
  