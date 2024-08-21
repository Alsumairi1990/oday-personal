"use server"
import { Prisma, Tag, Tool } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { ToolWithUser } from "../../codes/utils/ToolWithUser";
import { slugify } from "@/utils/TextUtils";
import { MenuElementsSchema } from "@/app/admin/setting/left-nav/_utils/MenuElementsSchema";
import { MenuWithModels } from "@/app/admin/setting/left-nav/_utils/MenuWithModels";
import { PhaseWithModels } from "../utils/PhaseWithModels";



// get phases
export async function getTools(): Promise<ToolWithUser[]> {
    const tools = await prisma.tool.findMany({
      include: {
        user: {
          select: {
            user_name: true,
          },
        },
      },
    });
    
    return tools as unknown as ToolWithUser[];
  }


//Delete Phase Element Parent by 'ids'
export async function deleteMenuElement(ids:string[]): Promise<PhaseWithModels[]> {
  try {
    const numberIds = ids.map(id => Number(id));
    console.log("before deleted "+numberIds.length)
      const result = await prisma.phase.deleteMany({
        where: {
          id: {
            in: numberIds
          }
        }
      });
      console.log("deleted"+result)
      const results = await prisma.phase.findMany({
          include : {
              steps : true
            }
      });
  return results as PhaseWithModels[];
  } catch (error) {
    console.log(error);
    throw error;
  }
}




  // Get All Phases 
  export async function getPhaseElements():Promise<PhaseWithModels[]>{
    try {
      const elements = await prisma.phase.findMany({
        include : {
          steps : true
        }
      })
      return elements as PhaseWithModels[];
    } catch (error) {
      console.log('[getPhaseElements]'+ error);
      throw error;
    }
  }

 