
"use server"
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { Client, PageSection } from "@prisma/client";
import prisma from "@/utils/prisma";
import { HeroSectionSchema } from "../../../common/HeroSectionSchema";
import { SectionSchema } from "../../../common/SectionSchema";
import { AboutUsSchema } from "../_utils/AboutUsSchema";

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
export async function  addAboutUs(data:FormData):Promise<number>{
    try {
     const result = AboutUsSchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/front/about/images", { recursive: true })
         imagePath = `/front/about/images/${crypto.randomUUID()}-${data.image.name}`
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
         const basic = await prisma.aboutUsSection.create({
           data: {
            name : data.name,
             title: data.title,
             titleAr : data.titleAr,

             desc : data.description,
             descAr : data.descriptionAr,

             topTitlAr : data.topTitlAr,
             topTitle : data.topTitle,
             more: data.more,
             moreAr : data.moreAr,

             url : data.url,
             
             isActive : data.isActive == 'yes' ? true : false,

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