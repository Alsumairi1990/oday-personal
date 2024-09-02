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
import { MenuParentSchema } from "../_utils/MenuParentSchema";
import { Element, MenuParent } from "@prisma/client";
import { MenuWithAllModels } from "../_utils/MenuWithAllModels";


//Delete Meny Element Parent by 'ids'
export async function getMenusElements(): Promise<MenuWithAllModels[]> {
  try {
 const menuWithElements = await prisma.adminMenu.findMany({
  include: {
    menuParent : true,
    elements: {
      include: {
        parent: true, // Include the parent element
        subElements: {
          include: {
            parent: true, // Include the parent for nested elements as well
            subElements: true, // Include nested elements up to the required depth
          },
        },
      },
    },
  },
});


     
  return menuWithElements as MenuWithAllModels[];
  } catch (error) {
    console.log(error);
    throw error;
  }
}


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
// Create and add nested Element to parent element
export async function  addingNestedElement(id:number,data:FormData):Promise<Element>{
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
          
                   
       return inner ;
    }else {
      throw new Error("Data converion on suucced")
    }
  } catch (error) {
    console.log('Exception while Creating Meny Element'+ error)
            throw error;
    }
    } 


// Create and add Inner Element to parent element
export async function  addingInnerElement(id:number,data:FormData,ids:number[]):Promise<MenuWithModels>{
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
            if(ids.length>0){
              const inner = await prisma.element.create({
                data : {
                    title: data.title,
                    link : data.link,
                    menuId : id,
                    icon : iconPath,
                    subElements: {
                      connect: ids.map((id) => ({ id })),
                    },
                },
                
            });
            }else {
              const inner = await prisma.element.create({
                data : {
                    title: data.title,
                    link : data.link,
                    menuId : id,
                    icon : iconPath
                }
            });
            }
           
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


 // get menu parent elements
export async function getMenuParent():Promise<MenuParent[]>{
  try {
     const elements = await prisma.menuParent.findMany({
     })
  return elements;
  } catch (error) {
      console.log("error while getting Menu Element " + error);
      throw error;
      
  } finally{

  }
}




// Creating Menu Parent  
export async function  addingMenuParent(data:FormData):Promise<MenuParent>{
  try {
    const result = MenuParentSchema.safeParse(Object.fromEntries(data.entries()))
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session.user.id;
    if (result.success) {
      const data = result.data; 
      let iconPath = '';
      if(data.icon && data.icon.name){
        await fs.mkdir("public/setting/leftnav/images", { recursive: true })
        iconPath = `/setting/leftnav/images/${crypto.randomUUID()}-${data.icon.name}`
        await fs.writeFile(
          `public${iconPath}`,
          Buffer.from(await data.icon.arrayBuffer())
          )
        }
          const menu = await prisma.menuParent.create({
                  data: {
                  title: data.title,
                  userId: userId,
                  priority:data.priority,
                  icon : iconPath,
              },
                });  
                     
       return menu;
    }else {
      throw new Error("Data converion on suucced")
    }
  } catch (error) {
    console.log('[addingMenuParent]'+ error)
            throw error;
    }
    } 



// Creating New Menu Element 
export async function  addingMenuElement(data:FormData,id:number):Promise<MenuWithModels>{
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
          const parent = await prisma.menuParent.findUnique({
            where : {
              id : id
            }
          })
          if (!parent) throw new Error ("Menu parent not exist");

            const code = await prisma.adminMenu.create({
                    data: {
                    title: data.title,
                    userId: userId,
                    icon : iconPath,
                    menuParentId :parent.id
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