
"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { Client, PageSection } from "@prisma/client";
import prisma from "@/utils/prisma";
import { HeroSectionSchema } from "../../../common/HeroSectionSchema";
import { SectionSchema } from "../../../common/SectionSchema";

// get clients 
export async function getclients():Promise<Client[]>{
  try {
    const clients = await prisma.client.findMany({

    })
    return clients;
    
  } catch (error) {
    console.log("[getOrderClientById]"+error);
    throw error;
  }

}

// Get Order Clients based on order id
export async function getOrderClientById(orderId:string):Promise<Client[] >{
  try {
    const client = await prisma.client.findMany({
      where: {
        id: orderId,
      },
     
    });   
    return client;
    
  } catch (error) {
    console.log("[getOrderClientById]"+error);
    throw error;
  }
}




// creating Page Section  info
export async function  CreatePageSection(data:FormData):Promise<number>{
  try {
   const result = SectionSchema.safeParse(Object.fromEntries(data.entries()))
   const session = await getServerSession(authOptions);
   if (!session) {
     throw new Error('User not authenticated');
   }
   const userId = session.user.id;
   if (result.success) {
     const data = result.data;
    
       const basic = await prisma.pageSection.create({
         data: {
           name : data.name?data.name : "",
           title: data.title?data.title : "",
           titleAr : data.titleAr?data.titleAr : "",
           desc: data.desc?data.desc : "",
           descAr : data.descAr?data.descAr : "",
           more: data.more?data.more : "",
           moreAr : data.moreAr?data.moreAr : "",
           itemsNo: data.itemsNo?data.itemsNo : 0,
           url : data.url?data.url : "",
           isActive : data.isActive?data.isActive : 'yes',
           userId : userId
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

// creating Hero Section  info
export async function  addHero(data:FormData):Promise<number>{
    try {
     const result = HeroSectionSchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/front/hero/images", { recursive: true })
         imagePath = `/front/hero/images/${crypto.randomUUID()}-${data.image.name}`
         const buffer = Buffer.from(await data.image.arrayBuffer());
         await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
       
         }
         const basic = await prisma.heroSection.create({
           data: {
             title: data.title?data.title : "",
             titleAr : data.titleAr?data.titleAr : "",

             subTitl: data.subTitl?data.subTitl : "",
             subTitlAr : data.subTitlAr?data.subTitlAr : "",

             more: data.more?data.more : "",
             moreAr : data.moreAr?data.moreAr : "",

             footerTitle: data.footerTitle?data.footerTitle : "",
             footerTitleAr : data.footerTitleAr?data.footerTitleAr : "",

             pageName: data.pageName?data.pageName : "",
             url : data.url?data.url : "",
             
             isActive : data.isActive?data.isActive : 'yes',

             image : imagePath,
             userId : userId
            
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