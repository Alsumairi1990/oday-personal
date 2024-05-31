"use server"
import { User } from "@prisma/client"
import prisma from "./prisma"

import * as bcrypt from "bcrypt";
import { compileActivationTemplate , sendMail} from "./mail";
import { signJwt } from "./jwt";


console.log("before  refister");

export async function registerUser(user: Omit<User,"id" | "emailVerified" | "image" | "createdAt" | "updatedAt">){ 
    const result = await prisma.user.create({
        data :{
            ...user,
            password : await bcrypt.hash(user.password, 10)
        }
    });

    console.log("after refister"+user);
    const jwtUserId = signJwt({
        id: result.id,
      });
    // const activeUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${result.id}`
    const activeUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;

    console.log("---------------------- bedore calling compileActivationTemplate ----------------");
    const body = compileActivationTemplate(user.user_name!,activeUrl)
    // const body = "active body";
    console.log("---------------------- after calling compileActivationTemplate ----------------");
    if (user.email) {
    const sendResult = await sendMail({
        to: user.email,
        subject: "Reset Password",
        body: body,
      });
      console.log("sendResult"+sendResult)
    }
      

}

// function sendMail(arg0: { to: string | null; subject: string; body: string; }) {
//     throw new Error("Function not implemented.");
// }
