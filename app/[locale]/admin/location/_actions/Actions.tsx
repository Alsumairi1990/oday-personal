"use server"
import { Location, Prisma, ServiceCode, Tag, Tool } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { formSchema } from "../utils/FormSchema";
import { slugify } from "@/utils/TextUtils";
import { ToolWithUser } from "../utils/ToolWithUser";





export async function getCodesByNames(): Promise<string[]> {
  const codes = await prisma.serviceCode.findMany({
    select: {
      code: true,
    },
  });
  return codes.map(code => code.code);
}

export async function getLocationById(id:string): Promise<Location | null>{
  const cid = Number(id);
    const code = await prisma.location.findFirst({
        where: {
          id: cid,
        },
        
      });   
      return code;
  }

export async function deleteCodes(ids:string[]): Promise<number[]> {
  const numberIds = ids.map(id => Number(id));

  const codes = await prisma.serviceCode.deleteMany({
    where: {
      id: {
        in: numberIds
      }
    }
  });
  console.log('number deleted '+ numberIds);
  return numberIds;
} 


export async function getCodeByName(name:string): Promise<ServiceCode | null> {
  const codes = await prisma.serviceCode.findFirst({
    where: {
      code: name,
    },
  });
  return codes;
}

// Edit Location 
export async function editLocation(data:FormData,id:number): Promise<Location | null > {
  try{
  const result = formSchema.safeParse(Object.fromEntries(data.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }
  if (result.success) {
    const data = result.data; 
    let imagePath = '';
    if(data.image && data.image.name){
      await fs.mkdir("public/locations/images", { recursive: true })
      imagePath = `/locations/images/${crypto.randomUUID()}-${data.image.name}`
      const buffer = Buffer.from(await data.image.arrayBuffer());
      await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
      // await fs.writeFile(
      //   `public${imagePath}`,
      //   Buffer.from(await data.image.arrayBuffer())
      //   )
      }
      const location = await prisma.location.findUnique({
        where  : {
          id:id
        }
      })
      if(!location) throw new Error("Location not Exist");
          const nameSlug = slugify(data.country);
                const element = await prisma.location.update({
                  where: { id : id},
                  data: {
                    country: data.country,
                    city: data.city,
                    image: imagePath,
                  },
                });
                return element;
        }else {
          throw new Error('not success');
        }
        
      }catch(error) {
        console.log(error);
        throw error;
      } 
      
}

// get location by Name 
export async function getLocationByName(name:string): Promise<Location | null> {
  // const nameSlug = slugify(name);
  const codes = await prisma.location.findFirst({
    where: {
      country: name,
    },
  });
  return codes;
}



export async function getLocations(): Promise<Location[]> {
  const codes = await prisma.location.findMany({
    // include: {
    //   user: {
    //     select: {
    //       user_name: true,
    //     },
    //   },
    // },
  });
  
  return codes;
}

export async function  addingLocation(data:FormData):Promise<Location | null>{

    console.log("0-0-0-0-0-0-0-0-0-0-0");
    const result = formSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/codes/images", { recursive: true })
        imagePath = `/codes/images/${crypto.randomUUID()}-${data.image.name}`
        const buffer = Buffer.from(await data.image.arrayBuffer());
        await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        // await fs.writeFile(
        //   `public${imagePath}`,
        //   Buffer.from(await data.image.arrayBuffer())
        //   )
        }
  
        // if(data.icon && data.icon.name){
        //   await fs.mkdir("public/codes/icons", { recursive: true })
        //   iconPath = `/codes/icons/${crypto.randomUUID()}-${data.icon.name}`
        //   await fs.writeFile(
        //     `public${iconPath}`,
        //     Buffer.from(await data.icon.arrayBuffer())
        //     )
        //   }
  
          console.log("icon path"+iconPath);
  
            const nameSlug = slugify(data.country);
            // const category = await prisma.category.findFirst({
            // where: { slug: nameSlug },
            // });
            // console.log(category?.name)
            // if (category){
            
              try {
                if(imagePath != ''){
                  const codes = await prisma.location.create({
                    data: {
                    country: data.country,
                    // slug: nameSlug,
                    city: data.city,
                    // userId: userId,
                    image: imagePath,
                  },
                
                });
                  return codes;
                }
  
                if(imagePath =='' ){
                  const code = await prisma.location.create({
                    data: {
                    country: data.country,
                    // slug: nameSlug,
                    city: data.city,
                    // userId: userId,
                  },
                });
                  return code;
                }
  
          
              } catch (error) {
                console.error('Error creating service:', error);
                throw new Error('Error creating service');
              }
  
    }
    return null;
  
  }