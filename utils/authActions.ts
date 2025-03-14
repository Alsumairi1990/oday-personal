"use server"
import { User } from "@prisma/client"
import prisma from "./prisma"

import * as bcrypt from "bcrypt";
import { compileActivationTemplate ,compileResetPassTemplate, sendMail} from "./mail";
import { signJwt, verifyJwt } from "./jwt";


console.log("before  refister");

export async function registerUser(user: Omit<User,"id" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "clientId">): Promise<'success' | 'notSuccess'>{ 
  try {
    
   
  const result = await prisma.user.create({
        data :{
            ...user,
            password : await bcrypt.hash(user.password, 10)
        }
    });

    console.log("---------------------- before SignJWT ----------------");
    const jwtUserId = signJwt({
        id: result.id,
      });
    // const activeUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${result.id}`
    const activeUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
    console.log("---------------------- after SignJWT ----------------");
    console.log("---------------------- bedore calling compileActivationTemplate ----------------");
    const body = compileActivationTemplate(user.user_name!,activeUrl)
    // const body = "active body";
    console.log("---------------------- after calling compileActivationTemplate ----------------");
    if (user.email) {
    const sendResult = await sendMail({
        to: user.email,
        subject: "Email Activation",
        body: body,
      });
      console.log("sendResult"+sendResult)
     }
     return 'success'
    } catch (error:any) {
        throw new Error(error)
    } 

}

type ActivateUserFunc = (
    jwtUserId: string
  ) => Promise<"userNotExist" | "alreadyActivated" | "success">;
  export const activateUser: ActivateUserFunc = async (jwtUserID) => {
    const payload = verifyJwt(jwtUserID);
    const userId = payload?.id;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) return "userNotExist";
    if (user.emailVerified) return "alreadyActivated";
    const result = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: new Date(),
      },
    });
    return "success";
  };  


  export async function forgotPassword(email: string) {
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) throw new Error("The User Does Not Exist!");

          //  Send Email with Password Reset Link
          const jwtUserId = signJwt({
            id: user.id,
          });
          const resetPassUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`;
          const body = compileResetPassTemplate(user.user_name!, resetPassUrl);
          if(user.email){
            const sendResult = await sendMail({
              to: user.email,
              subject: "Reset Password",
              body: body,
            });
            return sendResult;

          }
          
        }


        type ResetPasswordFucn = (
          jwtUserId: string,
          password: string
        ) => Promise<"userNotExist" | "success">;
        
        export const resetPassword: ResetPasswordFucn = async (jwtUserId, password) => {
          const payload = verifyJwt(jwtUserId);
          if (!payload) return "userNotExist";
          const userId = payload.id;
          const user = await prisma.user.findUnique({
            where: {
              id: userId,
            },
          });
          if (!user) return "userNotExist";
        
          const result = await prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              password: await bcrypt.hash(password, 10),
            },
          });
          if (result) return "success";
          else throw new Error("Something went wrong!");
        };

// function sendMail(arg0: { to: string | null; subject: string; body: string; }) {
//     throw new Error("Function not implemented.");
// }
