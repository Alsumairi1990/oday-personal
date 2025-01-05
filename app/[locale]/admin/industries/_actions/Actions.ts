
"use server"
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { IndustrySchema } from "../_utils/IndustrySchema";

// creating industry   info
export async function  createIndustry(data:FormData):Promise<number>{
    try {
     const result = IndustrySchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/industry-market/images", { recursive: true })
                imagePath = `/industry-market/images/${crypto.randomUUID()}-${data.image.name}`
                const buffer = Buffer.from(await data.image.arrayBuffer());
                await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        //  await fs.mkdir("public/front/about/images", { recursive: true })
        //  imagePath = `/front/about/images/${crypto.randomUUID()}-${data.image.name}`
        //  await fs.writeFile(
        //    `public${imagePath}`,
        //    Buffer.from(await data.image.arrayBuffer())
        //    )
         }
         const basic = await prisma.industry.create({
           data: {
            name : data.name,
             title: data.title,
             titleAr : data.titleAr,
             description : data.description,
             descriptionAr : data.descriptionAr,
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