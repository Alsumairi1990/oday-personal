"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { ServiceFeature, Tool } from "@prisma/client";
import { FeaturesSchema } from "../_utils/FeatureSchema";



// get service features 
export async function  getTools():Promise<Tool[]>{
  try {
    const elements = await prisma.tool.findMany({
    })
    return elements;
  } catch (error) {
      console.log("[getTools]" + error)
      throw error;
   }
 }





// creating Page Section  info
export async function  CreateFeature(data:FormData,toolId:string):Promise<number>{
    try {
     const result = FeaturesSchema.safeParse(Object.fromEntries(data.entries()))     
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/feature-market/images", { recursive: true })
            imagePath = `/feature-market/images/${crypto.randomUUID()}-${data.image.name}`
            const buffer = Buffer.from(await data.image.arrayBuffer());
            await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
         }
      
         const basic = await prisma.feature.create({
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
             toolId : Number(toolId)
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