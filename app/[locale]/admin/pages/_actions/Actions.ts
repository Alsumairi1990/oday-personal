"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { Location, Market, Page } from "@prisma/client";
import { MarketSchema } from "../../market/_utils/MarketSchema";
import { PageSchema } from "../_utils/PageSchema";

//edit markte by id 
export async function editMarket(data:FormData,id:number,market:Market):Promise<number>{
  try {
    const result = MarketSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/market/images", { recursive: true })
        imagePath = `/market/images/${crypto.randomUUID()}-${data.image.name}`
        const buffer = Buffer.from(await data.image.arrayBuffer());
        await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        }
        if(data.icon && data.icon.name){
           await fs.mkdir("public/market/icons", { recursive: true })
           iconPath = `/market/icons/${crypto.randomUUID()}-${data.image.name}`
           const buffer = Buffer.from(await data.icon.arrayBuffer());
           await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
           }
        const basic = await prisma.market.update({
          where : {
            id : id
          },
          data: {
            name: data.name,
            nameAr : data.nameAr,
            title : data.title,
            titleAr : data.titleAr,
            topTitle : data.topTitle,
            topTitlAr : data.topTitlAr,
            description : data.description,
            descriptionAr : data.descriptionAr,
            image : imagePath?imagePath:market.image,
            icon : iconPath?iconPath:market.icon,
            userId : userId,
            location : data.location
          },
        });         
        return basic.id;
     
    }else {
     console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
       throw new Error ('Schema not converted ')
    }
   } catch (error) {
       console.log("[Create Client : Admin]" + error)
       throw error;
    }
}
export async function getMarketByName(id:number):Promise<Market | null>{
  try {
    const market = await prisma.market.findFirst({
      where : {
        id : Number(id)
      }
    })
    console.log(market?.name)
    return market;
    
  } catch (error) {
    console.log("[getMarketByName]"+error);
    throw error;
    
  }

}
// get all markets
export async function getPages(): Promise<Page[]> {
  const elements = await prisma.page.findMany({
  });
  return elements;
}


// get all locations
export async function getLocations(): Promise<Location[]> {
  // const nameSlug = slugify(name);
  const elements = await prisma.location.findMany({
  });
  return elements;
}

// creating Market  info
export async function  addBasic(data:FormData):Promise<number>{
    try {
     const result = PageSchema.safeParse(Object.fromEntries(data.entries()))
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
         await fs.mkdir("public/page-media/images", { recursive: true })
         imagePath = `/page-media/images/${crypto.randomUUID()}-${data.image.name}`
         const buffer = Buffer.from(await data.image.arrayBuffer());
         await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
         }
         if(data.icon && data.icon.name){
            await fs.mkdir("public/page-media/icons", { recursive: true })
            iconPath = `/page-media/icons/${crypto.randomUUID()}-${data.image.name}`
            const buffer = Buffer.from(await data.icon.arrayBuffer());
            await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
            }
         const basic = await prisma.page.create({
           data: {
             name: data.name,
             nameAr : data.nameAr,
             title : data.title,
             titleAr : data.titleAr,
             description : data.description,
             descriptionAr : data.descriptionAr,
             image : imagePath,
             icon : iconPath,
             userId : userId,
           },
         });         
         return basic.id;
      
     }else {
      console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
        throw new Error ('Schema not converted ')
     }
    } catch (error) {
        console.log("[Create Client : Admin]" + error)
        throw error;
     }
   }