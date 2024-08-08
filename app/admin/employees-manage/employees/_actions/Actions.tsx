"use server"
import prisma from "../../../../../utils/prisma";
import { number, z } from "zod"
import fs from "fs/promises"
import { Category, Testimonial, User } from "@prisma/client";
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";


// get all user 
export async function getUsers():Promise<User[]>{
    try {
        const result = await prisma.user.findMany({
        })
        return result as User[];
    } catch (error) {
        console.log("error");
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}