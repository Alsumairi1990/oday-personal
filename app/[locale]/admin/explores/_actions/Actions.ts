
"use server"
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { ExploresSchema } from "../_util/ExploresSchema";

// creating industry   info
export async function  createExplore(data:FormData):Promise<number>{
    try {
     const result = ExploresSchema.safeParse(Object.fromEntries(data.entries()))
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
         await fs.mkdir("public/explore-market/images", { recursive: true })
                imagePath = `/explore-market/images/${crypto.randomUUID()}-${data.image.name}`
                const buffer = Buffer.from(await data.image.arrayBuffer());
                await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
         }
         if(data.icon && data.icon.name){
            await fs.mkdir("public/explore-market/images", { recursive: true })
                   iconPath = `/explore-market/images/${crypto.randomUUID()}-${data.icon.name}`
                   const buffer = Buffer.from(await data.icon.arrayBuffer());
                   await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
            }
         const basic = await prisma.explore.create({
           data: {
             name : data.name,
             nameAr : data.nameAr,
             title: data.title,
             titleAr : data.titleAr,
             url : data.url,
             description : data.description,
             descriptionAr : data.descriptionAr,
             image : imagePath,
             icon : iconPath,
             userId : userId
           },
         });         
         return basic.id;
      
     }else {
      console.log('Validation errors:', result.error.format());
        throw new Error ('Schema not converted ')
     }
    } catch (error) {
        console.log("[Create explore : Admin]" + error)
        throw error;
     }
   }