// export type TagWithUser = {
//     id: number;
//     name: string;
//     slug: string;
//     image: string | null;
//     icon: string | null;
//     description: string | null;
//     userId: string;
//     user: {
//       user_name: string | null;
//       role: string | null;
//     } | null;

import { Tool, User } from "@prisma/client";

//   };
export type ToolWithUser = Tool & {
   user:User
};