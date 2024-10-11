"use server"
import { Prisma, Tag, Tool } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { toolSchema } from "../utils/FormSchema";
import { slugify } from "@/utils/TextUtils";
import { ToolWithUser } from "../utils/ToolWithUser";
import { TagWithUser } from "../../tag/utils/TagWithUser";





export async function getToolsByNames(): Promise<string[]> {
  const tools = await prisma.tool.findMany({
    select: {
      name: true,
    },
  });
  return tools.map(tool => tool.name);
}

export async function getToolById(id:string): Promise<ToolWithUser | null>{
  const cid = Number(id);
    const tool = await prisma.tool.findFirst({
        where: {
          id: cid,
        },
        include: {
          user: {
            select: { user_name: true } 
          }
        }
      });   
      return tool as ToolWithUser;
  }

export async function deleteTools(ids:string[]): Promise<number[]> {
  const numberIds = ids.map(id => Number(id));

  const tools = await prisma.tool.deleteMany({
    where: {
      id: {
        in: numberIds
      }
    }
  });
  console.log('number deleted '+ numberIds);
  return numberIds;
} 


export async function getToolByName(name:string): Promise<Tool | null> {
  const tool = await prisma.tool.findFirst({
    where: {
      name: name,
    },
  });
  return tool;
}

export async function editTool(data:FormData,id:number): Promise<Tool | null > {
  console.log("0-0-0-0-0-0-0-0-0-0-0 tools table");
  const result = toolSchema.safeParse(Object.fromEntries(data.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  if (result.success) {
    const data = result.data; 
    let imagePath = '';
    let iconPath = '';
    if(data.image && data.image.name){
      await fs.mkdir("public/tools/images", { recursive: true })
      imagePath = `/tools/images/${crypto.randomUUID()}-${data.image.name}`
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.image.arrayBuffer())
        )
      }

      if(data.icon && data.icon.name){
        await fs.mkdir("public/tools/icons", { recursive: true })
        iconPath = `/tools/icons/${crypto.randomUUID()}-${data.icon.name}`
        await fs.writeFile(
          `public${iconPath}`,
          Buffer.from(await data.icon.arrayBuffer())
          )
        }

        console.log("icon path"+iconPath);

          const nameSlug = slugify(data.name);
          // const category = await prisma.category.findFirst({
          // where: { slug: nameSlug },
          // });
          // console.log(category?.name)
          // if (category){
          console.log("------------------------++id"+id)
            try {
              if(imagePath != '' && iconPath != ''){
                const tool = await prisma.tool.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    image: imagePath,
                    icon: iconPath
                  },
                });
                return tool;
              }

              if(imagePath != '' && iconPath =='' ){
                const tool = await prisma.tool.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    image: imagePath,
                  },
                });
                return tool;
              }

              if(iconPath != '' && imagePath =='' ){
                const tool = await prisma.tool.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    icon: iconPath,
                  },
                });
                return tool;
              }
              if(iconPath == '' && imagePath =='' ){
                console.log("last one "+data.name);
                const tool = await prisma.tool.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                  },
                });
                console.log("last one "+tool.name);
                return tool;
              }

        
            } catch (error) {
              console.error('Error creating service:', error);
              throw new Error('Error creating service');
            }

  }
  return null;
}


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
  
  return tools as ToolWithUser[];
}

export async function  addingTool(data:FormData):Promise<Tool | null>{

    console.log("0-0-0-0-0-0-0-0-0-0-0");
    const result = toolSchema.safeParse(Object.fromEntries(data.entries()))
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error('User not authenticated');
    }
  
    const userId = session.user.id;
  
    if (result.success) {
      const data = result.data; 
      let imagePath = '';
      let iconPath = '';
      
      if(data.image && data.image.name){
        await fs.mkdir("public/tools/images", { recursive: true })
        imagePath = `/tools/images/${crypto.randomUUID()}-${data.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await data.image.arrayBuffer())
          )
        }
  
        if(data.icon && data.icon.name){
          await fs.mkdir("public/tools/icons", { recursive: true })
          iconPath = `/tools/icons/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
  
          console.log("icon path"+iconPath);
  
            const nameSlug = slugify(data.name);
            // const category = await prisma.category.findFirst({
            // where: { slug: nameSlug },
            // });
            // console.log(category?.name)
            // if (category){
            
              try {
                if(imagePath != '' && iconPath != ''){
                  const tool = await prisma.tool.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    image: imagePath,
                    icon : iconPath
                  },
                
                });
                console.log("server ---"+tool)
                  return tool;
                }
  
                if(imagePath != '' && iconPath =='' ){
                  const tool = await prisma.tool.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    image: imagePath,
                  },
                 
                });
                  return tool;
                }
  
                if(iconPath != '' && imagePath =='' ){
                  const tool = await prisma.tool.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    icon : iconPath
                  },
                });
                  return tool;
                }
                if(iconPath == '' && imagePath =='' ){
                  const tool = await prisma.tool.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                  },
                });
                  return tool;
                }
  
          
              } catch (error) {
                console.error('Error creating service:', error);
                throw new Error('Error creating service');
              }
  
    }
    return null;
  
  }