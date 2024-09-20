"use server"
import { Prisma, Tag } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { addSchema } from "../utils/FormSchema";
import { slugify } from "@/utils/TextUtils";
import { TagWithUser } from "../utils/TagWithUser";





export async function getTagsByNames(): Promise<string[]> {
  const tags = await prisma.tag.findMany({
    select: {
      name: true,
    },
  });
  return tags.map(tag => tag.name);
}

export async function getTagById(id:string): Promise<TagWithUser | null>{
  const cid = Number(id);
    const tag = await prisma.tag.findFirst({
        where: {
          id: cid,
        },
        include: {
          user: {
            select: { user_name: true } 
          }
        }
      });   
      return tag as TagWithUser;
  }

export async function deleteTags(ids:string[]): Promise<number[]> {
  const numberIds = ids.map(id => Number(id));

  const catgs = await prisma.tag.deleteMany({
    where: {
      id: {
        in: numberIds
      }
    }
  });
  console.log('number deleted '+ numberIds);
  return numberIds;
} 


export async function getTagByName(name:string): Promise<Tag | null> {
  const tag = await prisma.tag.findFirst({
    where: {
      name: name,
    },
  });
  return tag;
}

export async function editTag(data:FormData,id:number): Promise<Tag | null > {
  console.log("0-0-0-0-0-0-0-0-0-0-0");
  const result = addSchema.safeParse(Object.fromEntries(data.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  if (result.success) {
    const data = result.data; 
    let imagePath = '';
    let iconPath = '';
    if(data.image && data.image.name){
      await fs.mkdir("public/tags/images", { recursive: true })
      imagePath = `/tags/images/${crypto.randomUUID()}-${data.image.name}`
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await data.image.arrayBuffer())
        )
      }

      if(data.icon && data.icon.name){
        await fs.mkdir("public/tags/icons", { recursive: true })
        iconPath = `/tags/icons/${crypto.randomUUID()}-${data.icon.name}`
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
                const tag = await prisma.tag.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    image: imagePath,
                    icon: iconPath
                  },
                });
                return tag;
              }

              if(imagePath != '' && iconPath =='' ){
                const tag = await prisma.tag.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    image: imagePath,
                  },
                });
                return tag;
              }

              if(iconPath != '' && imagePath =='' ){
                const tag = await prisma.tag.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                    icon: iconPath,
                  },
                });
                return tag;
              }
              if(iconPath == '' && imagePath =='' ){
                const tag = await prisma.tag.update({
                  where: { id : id},
                  data: {
                    name: data.name,
                    description: data.description,
                  },
                });
                return tag;
              }

        
            } catch (error) {
              console.error('Error creating service:', error);
              throw new Error('Error creating service');
            }

  }
  return null;
}


export async function getTags(): Promise<TagWithUser[]> {
  const categories = await prisma.tag.findMany({
    include: {
      user: {
        select: {
          user_name: true,
        },
      },
    },
  });
  
  return categories as TagWithUser[];
}

export async function  addingTag(data:FormData):Promise<Tag | null>{

    console.log("0-0-0-0-0-0-0-0-0-0-0");
    const result = addSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/tags/images", { recursive: true })
        imagePath = `/tags/images/${crypto.randomUUID()}-${data.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await data.image.arrayBuffer())
          )
        }
  
        if(data.icon && data.icon.name){
          await fs.mkdir("public/tags/icons", { recursive: true })
          iconPath = `/tags/icons/${crypto.randomUUID()}-${data.icon.name}`
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
                  const tag = await prisma.tag.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    image: imagePath,
                    icon : iconPath
                  },
                
                });
                console.log("server ---"+tag)
                  return tag;
                }
  
                if(imagePath != '' && iconPath =='' ){
                  const tag = await prisma.tag.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    image: imagePath,
                  },
                 
                });
                  return tag;
                }
  
                if(iconPath != '' && imagePath =='' ){
                  const tag = await prisma.tag.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                    icon : iconPath
                  },
                });
                  return tag;
                }
                if(iconPath == '' && imagePath =='' ){
                  const tag = await prisma.tag.create({
                    data: {
                    name: data.name,
                    slug: nameSlug,
                    description: data.description,
                    userId: userId,
                  },
                });
                  return tag;
                }
  
          
              } catch (error) {
                console.error('Error creating service:', error);
                throw new Error('Error creating service');
              }
  
    }
    return null;
  
  }