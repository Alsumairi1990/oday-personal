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


 