import { Work } from "@prisma/client";

export type WorksFrontData = Work & {
    categories: {
      category: {
        name: string;
        nameAr: string; 
      };
    }[];
    service: {
      name: string; 
      nameAr: string;
    };
  };
  