import { Category, Media, Phase, Project, Task, Team, Tool, User } from "@prisma/client";

export type ProjectWithModels = Project & {
    categories: Category[]
    tools : Tool[]
    user : User
    team  : Team
    phases : Phase[]
    location : Location
    tasks   : Task[]
    media   : Media[]
  };