
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/utils/prisma";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },

  providers: [
    CredentialsProvider({

      name: "Credentials",
      credentials: {
        username: {
            label: "User Name",
            type: "text",
            placeholder: "Your User Name",
          },
          password: {
            label: "Password",
            type: "password",
          },
      },
      async authorize(credentials, req) {
        console.log('start authorize method')
        const user = await prisma.user.findUnique({
                          where: {
                            email: credentials?.username,
                          },
                        });
                       console.log("user name"+user?.user_name)
                        if (!user) throw new Error("User name or password is not correct");
                          
                        if (!credentials?.password) throw new Error("Please Provide Your Password");
                        const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
                
                        if (!isPassowrdCorrect) throw new Error("User name or password is not correct");
                
                        if (!user.email) throw new Error("Please verify your email first!");
                          
                        if (!user.emailVerified) throw new Error("Please verify your email first!");
                        
                        const { password, ...userWithoutPass } = user;
                        console.log('last authorize method'+userWithoutPass)
                        return userWithoutPass;
      },
    }),
  ],
      callbacks: {
      async jwt({ token, user }) {
        if (user) token.user = user as User & { role: string };
          
        
        return token;
      },
  
      async session({ token, session }) {
        session.user = token.user;
        return session;
      },
    },
});

export { handler as GET, handler as POST };

// import { AuthOptions } from "next-auth";



// import prisma from "@/utils/prisma";
// import CredentialsProvider  from "next-auth/providers/credentials";
// import * as bcrypt from "bcrypt";
// import NextAuth from "next-auth/next";
// import { User } from "@prisma/client";

// export const  authOptions : AuthOptions= {
//   pages: {
//     signIn: "/auth/signin",
//   },
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
      
//             credentials: {
//               username: {
//                 label: "User Name",
//                 type: "text",
//                 placeholder: "Your User Name",
//               },
//               password: {
//                 label: "Password",
//                 type: "password",
//               },
//             },
//             async authorize(credentials) {
//               const user = await prisma.user.findUnique({
//                 where: {
//                   email: credentials?.username,
//                 },
//               });
      
//               if (!user) throw new Error("User name or password is not correct");
    
//               if (!credentials?.password) throw new Error("Please Provide Your Password");
//               const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
      
//               if (!isPassowrdCorrect) throw new Error("User name or password is not correct");
      
//               if (!user.email) throw new Error("Please verify your email first!");
      
//               const { password, ...userWithoutPass } = user;
//               return userWithoutPass;
//             },
//           }),
//     ],
//     callbacks: {
//       async jwt({ token, user }) {
//         if (user) token.user = user as User;
//         return token;
//       },
  
//       async session({ token, session }) {
//         session.user = token.user;
//         return session;
//       },
//     },
// };
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
