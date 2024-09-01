"use server"
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { MenuWithModels } from "../_utils/MenuWithModels";
import prisma from "../../../../../utils/prisma";
import { MenuElementsSchema } from "../_utils/MenuElementsSchema";
import { MenuElementSchema } from "../_utils/MenuElementSchema";


//Delete Meny Element Parent by 'ids'
export async function deleteMenuElement(ids:string[]): Promise<MenuWithModels[]> {
    try {
      const numberIds = ids.map(id => Number(id));
      console.log("before deleted "+numberIds.length)
        const result = await prisma.adminMenu.deleteMany({
          where: {
            id: {
              in: numberIds
            }
          }
        });
        console.log("deleted"+result)
        const results = await prisma.adminMenu.findMany({
            include : {
                elements : true
              }
        });
    return results as MenuWithModels[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

// Create and add Inner Element to parent element
export async function  addingInnerElement(id:number,data:FormData):Promise<MenuWithModels>{
    try {
      const result = MenuElementSchema.safeParse(Object.fromEntries(data.entries()))
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      
    
      if (result.success) {
        const data = result.data; 
        let iconPath = '';
        if(data.icon && data.icon.name){
          await fs.mkdir("public/codes/images", { recursive: true })
          iconPath = `/codes/images/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
            const elem = await prisma.adminMenu.findUnique({
                where : {
                    id : id
                }
            });
            const inner = await prisma.element.create({
                data : {
                    title: data.title,
                    link : data.link,
                    menuId : id,
                    icon : iconPath
                }
            });
            if(!elem){throw new Error("Element Not Exist")}
            
                const results = await prisma.adminMenu.findUnique({
                    where: {
                      id : id
                    },
                    include : {
                      elements : true
                    }
                  })         
         return results as MenuWithModels;
      }else {
        throw new Error("Data converion on suucced")
      }
    } catch (error) {
      console.log('Exception while Creating Meny Element'+ error)
              throw error;
      }
      } 



// Creating New Menu Element 
export async function  addingMenuElement(data:FormData):Promise<MenuWithModels>{
    try {
      const result = MenuElementsSchema.safeParse(Object.fromEntries(data.entries()))
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      const userId = session.user.id;
    
      if (result.success) {
        const data = result.data; 
        let iconPath = '';
        if(data.icon && data.icon.name){
          await fs.mkdir("public/codes/images", { recursive: true })
          iconPath = `/codes/images/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
            const code = await prisma.adminMenu.create({
                    data: {
                    title: data.title,
                    userId: userId,
                    icon : iconPath,
                    menuParentId :3
                },
                    
                  });  
                  const results = await prisma.adminMenu.findUnique({
                    where: {
                      id : code.id
                    },
                    include : {
                      elements : true
                    }
                  })         
         return code as MenuWithModels;
      }else {
        throw new Error("Data converion on suucced")
      }
    } catch (error) {
      console.log('Exception while Creating Meny Element'+ error)
              throw error;
      }
      } 

      
// get Inner Element of passed menu element 
export async function getElelemntWModelsById(id:number):Promise<MenuWithModels>{
    try {
       const elements = await prisma.adminMenu.findUnique({
        where : {
            id : id
        },
        include: {
            elements: true
             }
       })
    return elements as MenuWithModels;
        
    } catch (error) {
        console.log("error while getting Menu Element " + error);
        throw error;
        
    } finally{

    }
}


// get All Menu Elements with models 
export async function getMenuElements():Promise<MenuWithModels[]>{
    const results = await prisma.adminMenu.findMany({
        include : {
            elements : true
          }
    });
    return results as MenuWithModels[];
    
}