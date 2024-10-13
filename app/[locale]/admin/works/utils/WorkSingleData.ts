import { Client, Tag, Work } from "@prisma/client";

export type WorkSingleData = Work & {
    categories: {
      category: {
        name: string;
        nameAr: string; 
      };
    }[];
    tools: {
      tool: {
        name: string;
        nameAr: string; 
      };
    }[];
    
    service: {
      name: string; 
      nameAr: string;
    };
    clients : Client[];
    tags: {
      tag: {
        name: string;
        nameAr: string; 
      };
    }[];
    location : {
      country:string;
      countryAr : string;
      city : string ;
      cityAr : string;
    };
  };
  