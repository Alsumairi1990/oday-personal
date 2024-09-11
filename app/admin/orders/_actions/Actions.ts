"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { BasicSchema } from "../_utils/BasicSchema";
import { slugify } from "@/utils/TextUtils";
import { Category, Client } from "@prisma/client";
import { addCategoy } from "../../common/_actions/Actions";

// Adding order category
export async function addOrderClient(orderId: string, id: string): Promise<Client[]> {
  try {
    const toolsExist = await prisma.client.findMany({
      where: {
        id: id
      }
    });
    if (toolsExist.length < 1) {
      throw new Error(`One or more client do not exist.`);
    }

    const orderExists = await prisma.order.findUnique({
      where: { id: orderId }
    });
    if (!orderExists) {
      throw new Error(`Order with ID ${orderId} does not exist.`);
    }
      const existingAssociations = await prisma.order.findMany({
          where: {
            id : orderId,
            clientId: id
          },
          select: {
            id: true,
          },
        });
    

    if (existingAssociations) {
      throw new Error('All provided client IDs are already associated with the order');
    }
      const result = await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          clientId: id, 
        },
      });
    
    
    const clients = await prisma.client.findMany({
      where: {
        id: orderId,
      },
     
    });  

    return clients;
  } catch (error) {
    console.error('Error updating Order with category:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
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


// Remove order category
export async function removeOrderCategory(orderId: string, name: string): Promise<Category[]> {
  try {
    const nameSlug = slugify(name);
    const category = await prisma.category.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!category) {
      throw new Error('Category Not Exist');
    }
    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        categories: {
          disconnect: { id: category.id },
        },
      },
      include: {
        categories: true
      },
    });
    return updatedOrder.categories;
  } catch (error) {
    console.error('[removeOrderCategory]', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Get Categories by order id 
export async function getOrderWCategorylById(orderId:string):Promise<Category[] >{
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        categories: true
      },
    });
    let catgs:Category[] = [];
    if(order?.categories) {
        catgs= order?.categories;
    }
    return catgs;
    
  } catch (error) {
    console.log("[getOrderWCategorylById]"+error);
    throw error;
  }
}


//Adding New Category and associat it with order
export async function createOrderCategory(orderId: string, name:string): Promise<Category> {
  try {     
  const categoryId = await addCategoy(name); 
  const updated = await prisma.order.update({
      where: {
        id: orderId
      },
      data: {
          categories: {
              connect: { id: categoryId } ,
            },
      },
      include: {
        categories: true
      }
    });

    const toolName = await prisma.category.findUnique({
      where: {
          id: categoryId
      },
    
  });
 
  return toolName!;      
  } catch (error) {
    console.error('[createOrderCategory]', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Adding order category
export async function addOrderCategory(orderId: string, ids: number[]): Promise<Category[]> {
  try {
      const existingAssociations = await prisma.category.findMany({
          where: {
            id: {
              in: ids,
            },
            orders: {
              some: {
                id: orderId,
              },
            },
          },
          select: {
            id: true,
          },
        });
    const existingToolIds = existingAssociations.map(cat => cat.id);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided cotegory IDs are already associated with the service');
    }
    const orderExists = await prisma.order.findUnique({
      where: { id: orderId }
    });
    if (!orderExists) {
      throw new Error(`Order with ID ${orderId} does not exist.`);
    }
    const toolsExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatesOrder = await prisma.order.update({
      where: {
        id: orderId
      },
      data: {
          categories: {
              connect: newIds.map(id => ({ id })),
            },
      },
      include: {
        categories: true
      }
    });
    return updatesOrder.categories;
  } catch (error) {
    console.error('Error updating Order with category:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// creating Order basic info
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
         await fs.mkdir("public/orders/images", { recursive: true })
         imagePath = `/orders/images/${crypto.randomUUID()}-${data.image.name}`
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
          const orderNumber = await generateOrderID();
         const basic = await prisma.order.create({
           data: {
             orderNumber : orderNumber,
             description : data.description,
             discount: data.discount,
             quantity : data.quantity,
             unitPrice : data.unitPrice,
             orderManagerId : userId,
             image : imagePath,
             taxAmount : data.taxAmount,
             taxRate : data.taxRate,
             orderType : data.orderType,
             paymentMethod : data.paymentMethod,
             paymentTerms : data.paymentTerms,
             status: data.status,
             totalAmount : data.totalAmount? data.totalAmount:0,
             subtotal : data.subtotal,
             currency : data.currency,
             notes : data.notes
           },
         });         
         return basic.id;
      
     }else {
      console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
        throw new Error ('Schema not converted ')
     }
    } catch (error) {
        console.log("[Add Basic Order]" + error)
        throw error;
     }
   }

   export async function generateOrderID():Promise<string> {
    try {
        
   
    const part1 = "SAM";  // Static prefix
    const part2 = "ORD";  // Static prefix
    
    // Get the current date in YYYYMMDD format
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // pad with '0' for single-digit months
    const day = String(currentDate.getDate()).padStart(2, '0');        // pad with '0' for single-digit days
    const part3 = `${year}${month}${day}`;  // Date part in YYYYMMDD format
  
    // Generate a random 10-digit number
    const part4 = String(Math.floor(1000000000 + Math.random() * 9000000000));  // Ensures a 10-digit number
    // Combine all parts to create the orderID
    const orderID:string = `${part1}${part2}${part3}${part4}`;
    return orderID;
        } catch (error) {
            console.log("[generateOrderID]"+error);
            throw error;
            
        }
  }
  

  
  
  