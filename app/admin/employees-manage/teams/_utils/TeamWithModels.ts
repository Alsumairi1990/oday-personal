import { Department, EmployeeProfile, Team, TeamEmployee, User} from "@prisma/client";
export type TeamWithModels = Team & {
    employees : (TeamEmployee & { employee: EmployeeProfile })[],
    department : Department
    
  };

