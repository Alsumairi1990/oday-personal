import { Project, Service } from "@prisma/client";

export type ProjectAnalyticsModel = Project & {
  _count: {
    tasks: number;
    phases: number;
  };
};
