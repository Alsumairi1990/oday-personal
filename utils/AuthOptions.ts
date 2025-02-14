// // authOptions.ts
// import { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import prisma from '@/utils/prisma';
// import { User } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/auth/signin',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: {
//           label: 'User Name',
//           type: 'text',
//           placeholder: 'Your User Name',
//         },
//         password: {
//           label: 'Password',
//           type: 'password',
//         },
//       },
//       async authorize(credentials) {
//         console.log('start authorize method');
//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials?.username,
//           },
//         });
//         console.log('user name' + user?.user_name);
//         if (!user) throw new Error('User name or password is not correct');
//         if (!credentials?.password) throw new Error('Please Provide Your Password');
//         const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
//         if (!isPassowrdCorrect) throw new Error('User name or password is not correct');
//         if (!user.email) throw new Error('Please verify your email first!');
//         if (!user.emailVerified) throw new Error('Please verify your email first!');
//         const { password, ...userWithoutPass } = user;
//         console.log('last authorize method' + userWithoutPass);
//         return userWithoutPass;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user as User & { role: string };
//       console.log('----------------- inside jwt callback-------------------');
//       return token;
//     },
//     async session({ token, session }) {
//       console.log('----------------- inside session callback-------------------');
//       session.user = token.user;
//       return session;
//     },
//   },
// };

// export default authOptions;

// authOptions.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/utils/prisma';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'User Name',
          type: 'text',
          placeholder: 'Your User Name',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        console.log('start authorize method');
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });
        console.log('user name' + user?.user_name);
        if (!user) throw new Error('User name or password is not correct');
        if (!credentials?.password) throw new Error('Please Provide Your Password');
        const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPassowrdCorrect) throw new Error('User name or password is not correct');
        if (!user.email) throw new Error('Please verify your email first!');
        if (!user.emailVerified) throw new Error('Please verify your email first!');
        const { password, ...userWithoutPass } = user;
        console.log('last authorize method' + userWithoutPass);
        return userWithoutPass;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User & { role: string };
      console.log('----------------- inside jwt callback-------------------');
      return token;
    },
    async session({ token, session }) {
      console.log('----------------- inside session callback-------------------');
      session.user = token.user;
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email as string,
              user_name: user.name as string,
              emailVerified: new Date(),
              password: "google_oauth_user",
              phone: "0000000000",
              confirmed_password: "google_oauth_user"             
            },
          });
        }
      }
      return true;
    },
  },
};

export default authOptions;



// import { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
// import prisma from '@/utils/prisma';
// import { User } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/auth/signin',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: {
//           label: 'User Name',
//           type: 'text',
//           placeholder: 'Your User Name',
//         },
//         password: {
//           label: 'Password',
//           type: 'password',
//         },
//       },
//       async authorize(credentials) {
//         console.log('start authorize method');
//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials?.username,
//           },
//         });
//         if (!user) throw new Error('User name or password is not correct');
//         if (!credentials?.password) throw new Error('Please Provide Your Password');
//         const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
//         if (!isPassowrdCorrect) throw new Error('User name or password is not correct');
//         if (!user.email) throw new Error('Please verify your email first!');
//         if (!user.emailVerified) throw new Error('Please verify your email first!');

//         // Return only the required fields
//         return {
//           id: user.id.toString(),
//           email: user.email,
//           name: user.user_name,
//         };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = {
//           id: user.id,
//           email: user.email!,
//           user_name: user.name,
//           role: 'user', // Default role
//         };
//       }
//       console.log('----------------- inside jwt callback-------------------');
//       return token;
//     },
//     async session({ token, session }) {
//       console.log('----------------- inside session callback-------------------');
//       session.user = {
//         id: token.user.id,
//         email: token.user.email,
//         name: token.user.name,
//         role: token.user.role,
//       };
//       return session;
//     },
//     async signIn({ user, account, profile }) {
//       if (account?.provider === 'google') {
//         const existingUser = await prisma.user.findUnique({
//           where: { email: user.email as string },
//         });

//         if (!existingUser) {
//           await prisma.user.create({
//             data: {
//               email: user.email as string,
//               user_name: user.name as string,
//               emailVerified: new Date(),
//               password: "google_oauth_user",
//               phone: "0000000000",
//               confirmed_password: "google_oauth_user"             
//             },
//           });
//         }
//       }
//       return true;
//     },
//   },
// };

// export default authOptions;
