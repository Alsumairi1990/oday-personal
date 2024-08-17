"use server"
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import prisma from "../../../../utils/prisma";
import { MenuWithModels } from "@/app/admin/setting/left-nav/_utils/MenuWithModels";


//get all menus for left admin nav
export async function getAdminLeftMenuElements():Promise<MenuWithModels[]>{
    try {
        const elements = await prisma.adminMenu.findMany({
            include: {
                elements : true
            }
        })
        return elements as MenuWithModels[];
    } catch (error) {
        console.log("Exception while getting ledt menu elements " + error);
        throw error;
    } finally {
        await prisma.$disconnect();
      }

}