"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { BasicSchema } from "../_utils/BasicSchema";
import { slugify } from "@/utils/TextUtils";

// creating product basic info
export async function  addBasic(data:FormData):Promise<string>{
    try {
     const result = BasicSchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/products/images", { recursive: true })
         imagePath = `/products/images/${crypto.randomUUID()}-${data.image.name}`
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
         let slug = slugify(data.name);

         const basic = await prisma.product.create({
           data: {
             name : data.name,
             slug : slug,
             description : data.description,
             isActive: data.isActive === 'yes' ? true : false,
             isPublished : data.isPublished === 'yes' ? true : false,
             rating : data.rating,
             stockQuantity : data.stockQuantity,
             userId : userId,
             image : imagePath,
             dimensions : data.dimensions
             
           },
         });         
         return basic.id;
      
     }else {
        throw new Error ('Schema not yconverted ')
     }
    } catch (error) {
        console.log("[Add Basic Product]" + error)
        throw error;
     }
   }