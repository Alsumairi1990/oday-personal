"use server"
import { Prisma, ServiceCode, Tag, Tool } from "@prisma/client";
import prisma from "../../../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { formSchema } from "../utils/FormSchema";
import { slugify } from "@/utils/TextUtils";
import { ToolWithUser } from "../utils/ToolWithUser";





export async function getCodesByNames(): Promise<string[]> {
  const codes = await prisma.serviceCode.findMany({
    select: {
      code: true,
    },
  });
  return codes.map(code => code.code);
}

export async function getCodeById(id:string): Promise<ServiceCode | null>{
  const cid = Number(id);
    const code = await prisma.serviceCode.findFirst({
        where: {
          id: cid,
        },
        
      });   
      return code;
  }

export async function deleteCodes(ids:string[]): Promise<number[]> {
  const numberIds = ids.map(id => Number(id));

  const codes = await prisma.serviceCode.deleteMany({
    where: {
      id: {
        in: numberIds
      }
    }
  });
  console.log('number deleted '+ numberIds);
  return numberIds;
} 


export async function getCodeByName(name:string): Promise<ServiceCode | null> {
  const codes = await prisma.serviceCode.findFirst({
    where: {
      code: name,
    },
  });
  return codes;
}

export async function editCode(data:FormData,id:number): Promise<ServiceCode | null > {
  console.log("0-0-0-0-0-0-0-0-0-0-0 tools table");
  const result = formSchema.safeParse(Object.fromEntries(data.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  if (result.success) {
    const data = result.data; 
    let imagePath = '';
    let iconPath = '';
    if(data.image && data.image.name){
      await fs.mkdir("public/codes/images", { recursive: true })
      imagePath = `/codes/images/${crypto.randomUUID()}-${data.image.name}`
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.image.arrayBuffer())
        )
      }

      if(data.icon && data.icon.name){
        await fs.mkdir("public/codes/icons", { recursive: true })
        iconPath = `/codes/icons/${crypto.randomUUID()}-${data.icon.name}`
        await fs.writeFile(
          `public${iconPath}`,
          Buffer.from(await data.icon.arrayBuffer())
          )
        }

        console.log("icon path"+iconPath);

          const nameSlug = slugify(data.code);
          // const category = await prisma.category.findFirst({
          // where: { slug: nameSlug },
          // });
          // console.log(category?.name)
          // if (category){
          console.log("------------------------++id"+id)
            try {
              if(imagePath != '' && iconPath != ''){
                const codes = await prisma.serviceCode.update({
                  where: { id : id},
                  data: {
                    code: data.code,
                    description: data.description,
                    image: imagePath,
                    icon: iconPath
                  },
                });
                return codes;
              }

              if(imagePath != '' && iconPath =='' ){
                const codes = await prisma.serviceCode.update({
                  where: { id : id},
                  data: {
                    code: data.code,
                    description: data.description,
                    image: imagePath,
                  },
                });
                return codes;
              }

              if(iconPath != '' && imagePath =='' ){
                const codes = await prisma.serviceCode.update({
                  where: { id : id},
                  data: {
                    code: data.code,
                    description: data.description,
                    icon: iconPath,
                  },
                });
                return codes;
              }
              if(iconPath == '' && imagePath =='' ){
                console.log("last one "+data.code);
                const codes = await prisma.serviceCode.update({
                  where: { id : id},
                  data: {
                    code: data.code,
                    description: data.description,
                  },
                });
                console.log("last one "+codes.code);
                return codes;
              }

        
            } catch (error) {
              console.error('Error creating service:', error);
              throw new Error('Error creating service');
            }

  }
  return null;
}


export async function getCodes(): Promise<ServiceCode[]> {
  const codes = await prisma.serviceCode.findMany({
    // include: {
    //   user: {
    //     select: {
    //       user_name: true,
    //     },
    //   },
    // },
  });
  
  return codes;
}

export async function  addingCode(data:FormData):Promise<ServiceCode | null>{

    console.log("0-0-0-0-0-0-0-0-0-0-0");
    const result = formSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/codes/images", { recursive: true })
        imagePath = `/codes/images/${crypto.randomUUID()}-${data.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await data.image.arrayBuffer())
          )
        }
  
        if(data.icon && data.icon.name){
          await fs.mkdir("public/codes/icons", { recursive: true })
          iconPath = `/codes/icons/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
  
          console.log("icon path"+iconPath);
  
            const nameSlug = slugify(data.code);
            // const category = await prisma.category.findFirst({
            // where: { slug: nameSlug },
            // });
            // console.log(category?.name)
            // if (category){
            
              try {
                if(imagePath != '' && iconPath != ''){
                  const codes = await prisma.serviceCode.create({
                    data: {
                    code: data.code,
                    // slug: nameSlug,
                    description: data.description,
                    // userId: userId,
                    image: imagePath,
                    icon : iconPath
                  },
                
                });
                  return codes;
                }
  
                if(imagePath != '' && iconPath =='' ){
                  const code = await prisma.serviceCode.create({
                    data: {
                    code: data.code,
                    // slug: nameSlug,
                    description: data.description,
                    // userId: userId,
                    image: imagePath,
                  },
                 
                });
                  return code;
                }
  
                if(iconPath != '' && imagePath =='' ){
                  const code = await prisma.serviceCode.create({
                    data: {
                    code: data.code,
                    // slug: nameSlug,
                    description: data.description,
                    // userId: userId,
                    icon : iconPath
                  },
                });
                  return code;
                }
                if(iconPath == '' && imagePath =='' ){
                  const code = await prisma.serviceCode.create({
                    data: {
                    code: data.code,
                    // slug: nameSlug,
                    description: data.description,
                    // userId: userId,
                  },
                });
                  return code;
                }
  
          
              } catch (error) {
                console.error('Error creating service:', error);
                throw new Error('Error creating service');
              }
  
    }
    return null;
  
  }