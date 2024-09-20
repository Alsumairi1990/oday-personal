import { Project, Task } from "@prisma/client";

export type ProjectWTask = Project & {
    tasks : Task[]
  };