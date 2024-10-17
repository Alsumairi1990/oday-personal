"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { ClientSchema } from "../_utils/ClientSchema";
import { Client } from "@prisma/client";

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



// creating Order basic info
export async function  addBasic(data:FormData):Promise<string>{
    try {
     const result = ClientSchema.safeParse(Object.fromEntries(data.entries()))
     const session = await getServerSession(authOptions);
     if (!session) {
       throw new Error('User not authenticated');
     }
     const userId = session.user.id;
     if (result.success) {
       const data = result.data;
       let imagePath = '';
       if(data.image && data.image.name){
         await fs.mkdir("public/clients/images", { recursive: true })
         imagePath = `/clients/images/${crypto.randomUUID()}-${data.image.name}`
         const buffer = Buffer.from(await data.image.arrayBuffer());
         await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        //  await fs.writeFile(
        //    `public${imagePath}`,
        //    Buffer.from(await data.image.arrayBuffer())
        //    )
         }
         const basic = await prisma.client.create({
           data: {
             name: data.name,
             email : data.email,
             contactPerson : data.contactPerson,
             billingEmail : data.billingEmail,
             address : data.address,
             createdById : userId,
             image : imagePath,
             industry : data.industry,
             notes : data.notes,
             billingAddress : data.billingAddress,
             website : data.website,
             phone: data.phone,
             taxId : data.taxId,
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