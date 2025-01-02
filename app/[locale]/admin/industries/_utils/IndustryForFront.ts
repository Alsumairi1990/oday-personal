import { Service, Work, Post, Industry } from "@prisma/client";

export type IndustryForFront = Industry & {
  services: Service[];
  works: Work[]; // Add products directly related to Category
  posts : Post[];
};
