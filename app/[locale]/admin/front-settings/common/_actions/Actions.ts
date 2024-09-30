"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { ServiceFeaturesSchema } from "../ServiceFeaturesSchema";
import prisma from "@/utils/prisma";
import { ServiceFeature } from "@prisma/client";



// get service features 
export async function  getServicefeatures():Promise<ServiceFeature[]>{
  try {
    const services = await prisma.serviceFeature.findMany({
      take:4
    })
    return services;
  } catch (error) {
      console.log("[getServicefeatures]" + error)
      throw error;
   }
 }





// creating Page Section  info
export async function  CreateServiceFeature(data:FormData):Promise<number>{
    try {
     const result = ServiceFeaturesSchema.safeParse(Object.fromEntries(data.entries()))
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
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
      
         const basic = await prisma.serviceFeature.create({
           data: {
             name : data.name?data.name : "",
             title: data.title?data.title : "",
             titleAr : data.titleAr?data.titleAr : "",
             desc: data.desc?data.desc : "",
             descAr : data.descAr?data.descAr : "",
             more: data.more?data.more : "",
             moreAr : data.moreAr?data.moreAr : "",
             url : data.url?data.url : "",
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
        console.log("[CreateServiceFeature]" + error)
        throw error;
     }
   }