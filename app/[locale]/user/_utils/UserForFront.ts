import { EmployeeProfile, User, SocialNetwork, EmployeeSkill, TeamEmployee, Department } from "@prisma/client";

export type UserForFront = User & {
  employeeProfile: EmployeeProfile & {
    socialNetwork?: SocialNetwork | null;
    skills: EmployeeSkill[];
    teams: TeamEmployee[];
    departmentHeadOf: Department[];
  };
};
