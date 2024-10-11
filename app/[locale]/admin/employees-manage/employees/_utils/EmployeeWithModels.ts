import { User, EmployeeProfile, Role, Permission, Team, SocialNetwork } from "@prisma/client";

export type EmployeeWithModels = User & {
    employeeProfile: EmployeeProfile & { 
        socialNetwork: SocialNetwork
        team: Team[]; 
    }
    roles: (Role & { permissions: Permission[] })[]; 
};
