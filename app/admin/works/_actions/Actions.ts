"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../utils/prisma";
import { BasicSchema } from "../utils/BasicSchema";

import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { MediaSchema } from "../utils/MediaSchema";
import fs from "fs/promises"
import { NextApiRequest, NextApiResponse } from "next";



// creating work basic info
export async function  addBasic(data:FormData):Promise<number>{
    console.log("service ---- "+JSON.stringify(data, null, 2)
   );
     const result = BasicSchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       const nameSlug = slugify(data.title);
       let imagePaths:string[] = [];
    // if(data.additionalImages.length>9){
    //   const fileArray = Array.from(data.additionalImages);
    //   for (const file of fileArray) {
    //     const f:File | null = file as unknown as File;
    //     await fs.mkdir("public/works/icons", { recursive: true })
    //     const imagePath = `/works/icons/${crypto.randomUUID()}-${f.name}`;
    //     console.log("image path"+imagePath);
    //     await fs.writeFile(
    //       `public${imagePath}`,
    //       Buffer.from(await f.arrayBuffer())
    //       )
    //       imagePaths.push(imagePath);
    //       console.log(imagePaths);
    //   }
    // }
       try {
         const basic = await prisma.work.create({
           data: {
             title : data.title,
             description : data.description,
             highlights : data.highlights,
             client : data.client,
             userId : userId,
            //  additionalImages : imagePaths
           },
         });
         console.log("service id ---", basic.id);
         const workId = basic.id;
         return workId;
       } catch (error) {
         throw new Error('Error creating basic info ');
       }
     }
     return 0;
   }


// Adding Work tag
export async function addWorkTag(workId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.workTag.findMany({
      where: {
        workId: workId
      },
      select: {
        tagId: true
      }
    });
    const existingToolIds = existingCats.map(tag => tag.tagId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const workExists = await prisma.work.findUnique({
      where: { id: workId }
    });
    if (!workExists) {
      throw new Error(`Service with ID ${workId} does not exist.`);
    }
    const toolsExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.work.update({
      where: {
        id: workId
      },
      data: {
        tags: {
          create: newIds.map(tagId => ({
            tag: { connect: { id: tagId } }
          }))
        }
      },
      include: {
        tags: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const catIds: number[] = updatedService.tags.map(tag => tag.tagId);
    const names = await getCategoryNamesByIds(catIds); // Ensure this function is async if needed
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Work category
export async function addWorkCategory(workId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.workCategory.findMany({
      where: {
        workId: workId
      },
      select: {
        categoryId: true
      }
    });
    const existingToolIds = existingCats.map(cat => cat.categoryId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const workExists = await prisma.work.findUnique({
      where: { id: workId }
    });
    if (!workExists) {
      throw new Error(`Service with ID ${workId} does not exist.`);
    }
    const toolsExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.work.update({
      where: {
        id: workId
      },
      data: {
        categories: {
          create: newIds.map(catId => ({
            category: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const catIds: number[] = updatedService.categories.map(cat => cat.categoryId);
    const names = await getCategoryNamesByIds(catIds); // Ensure this function is async if needed
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


export async function addMed(data:FormData,workId:number):Promise<number>{
  
  const imageUrls = data.getAll('imageUrls');
 
  let imagePaths:string[] = [];
    if(imageUrls.length>0){
      for (const file of imageUrls) {
        const f:File | null = file as unknown as File;
        await fs.mkdir("public/works/images", { recursive: true })
        const imagePath = `/works/images/${crypto.randomUUID()}-${f.name}`;
        console.log("image path"+imagePath);
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await f.arrayBuffer())
          )
          imagePaths.push(imagePath);
          console.log(imagePaths);
      }
    }
    try {
      if(imagePaths.length >0 ){
      const updatedWork = await prisma.work.update({
        where: { id : workId},
        data: {
          imageUrls: imagePaths,
        },
      });
        return updatedWork.imageUrls.length;
      }
    } catch (error) {
      console.error('Error creating service:', error);
      throw error;
    }

    return 0;
}


// Get Work Images by ID 
export async function getWorkImagesById(workId:number):Promise<string[]>{
  const images = await prisma.work.findFirst({
          where: { id: workId },
          select:{
            imageUrls : true
          }
          });
      let imageUrls:string[] = [];
if(images){
  imageUrls = images?.imageUrls;
}
return imageUrls;
 
}




//Adding Work Media
export async function addingWorkMedia(data:FormData,workId:number):Promise<number>{
  const session = await getServerSession(authOptions);
  const result = MediaSchema.safeParse(Object.fromEntries(data.entries()))
  console.log("Starting");
  console.log(JSON.stringify(data, null, 2));

  if (!session) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;
  if (result.success) {
    console.log("inside success" + result.data.imageUrls.length);

    
    const data = result.data; 
    let imagePaths:string[] = [];
    let iconPath = '';
    
    if(data.imageUrls){
      const fileArray = Array.from(data.imageUrls);
      for (const file of fileArray) {
        await fs.mkdir("public/works/images", { recursive: true })
        const imagePath = `/works/images/${crypto.randomUUID()}-${file}`;
        console.log("image path"+imagePath);
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await file.arrayBuffer())
          )
          imagePaths.push(imagePath);
      }
      
     
      }

      // if(data.additionalImages && data.additionalImages.name){
      //   await fs.mkdir("public/categories/icons", { recursive: true })
      //   iconPath = `/categories/icons/${crypto.randomUUID()}-${data.additionalImages.name}`
      //   await fs.writeFile(
      //     `public${iconPath}`,
      //     Buffer.from(await data.additionalImages.arrayBuffer())
      //     )
      //   }

        // console.log("icon path"+iconPath);
            try {
              if(imagePaths.length >0 ){
              const updatedWork = await prisma.work.update({
                where: { id : workId},
                data: {
                  imageUrls: imagePaths,
                },
              });
                return updatedWork.imageUrls.length;
              }
            } catch (error) {
              console.error('Error creating service:', error);
              throw new Error('Error creating service');
            }

  }
  return 0;
}


// Get work by id with related tags
export async function getWorkWTagsById(workId:number):Promise<string[] >{
  const work = await prisma.work.findUnique({
    where: {
      id: workId,
    },
    include: {
      tags: {
        include: {
          tag: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = work?.tags || [];
  const toolNames: string[] = associatedTools.map(assoc => assoc.tag.name);
  return toolNames;
}


// Get serivce by id with related catefories
export async function getWorkWCategorylById(workId:number):Promise<string[] >{
  const work = await prisma.work.findUnique({
    where: {
      id: workId,
    },
    include: {
      categories: {
        include: {
          category: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = work?.categories || [];
  const toolNames: string[] = associatedTools.map(assocTool => assocTool.category.name);
  return toolNames;
}