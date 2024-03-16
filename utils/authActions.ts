"use server"
import { User } from "@prisma/client"
import prisma from "./prisma"

import * as bcrypt from "bcrypt";
import { compileActivationTemplate } from "./mail";

export async function registerUser(user: Omit<User,"id" | "emailVerified" | "image" | "createdAt" | "updatedAt">){ 
    const result = await prisma.user.create({
        data :{
            ...user,
            password : await bcrypt.hash(user.password, 10)
        }
    });

    const activeUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${result.id}`
    const body = compileActivationTemplate(user.user_name!,activeUrl)

}