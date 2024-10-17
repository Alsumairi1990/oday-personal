"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { OfferSchema } from "../_utils/OfferSchema";
import { Location, Market, Offer } from "@prisma/client";

//edit markte by id 
export async function editOffer(data:FormData,id:string,offer:Offer):Promise<string>{
  try {
    const result = OfferSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/offers/images", { recursive: true })
        imagePath = `/offers/images/${crypto.randomUUID()}-${data.image.name}`
        const buffer = Buffer.from(await data.image.arrayBuffer());
        await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        }
        if(data.icon && data.icon.name){
           await fs.mkdir("public/offers/icons", { recursive: true })
           iconPath = `/offers/icons/${crypto.randomUUID()}-${data.image.name}`
           const buffer = Buffer.from(await data.icon.arrayBuffer());
           await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
           }
        const basic = await prisma.offer.update({
          where : {
            id : id
          },
          data: {
            title : data.title,
             titleAr : data.titleAr,
             discount : data.discount,
             description : data.description,
             descriptionAr : data.descriptionAr,
             startDate : data.startDate,
             endDate : data.endDate,
            image : imagePath?imagePath:offer.image,
            icon : iconPath?iconPath:offer.icon,
            userId : userId,
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

//get offer by id
export async function getOfferById(id:string):Promise<Offer | null>{
  try {
    const market = await prisma.offer.findFirst({
      where : {
        id : id
      }
    })
    return market;
    
  } catch (error) {
    console.log("[getMarketByName]"+error);
    throw error;
    
  }

}



// get all offers
export async function getOffers(): Promise<Offer[]> {
  // const nameSlug = slugify(name);
  const elements = await prisma.offer.findMany({
  });
  return elements;
}

// creating offer info
export async function addOffer(data: FormData, locations: string[], services: string[]): Promise<string> {
    try {
      // Parse the offer data from the form
      const result = OfferSchema.safeParse(Object.fromEntries(data.entries()));
      const session = await getServerSession(authOptions);
  
      if (!session) {
        throw new Error('User not authenticated');
      }
  
      const userId = session.user.id;
  
      if (result.success) {
        const data = result.data;
  
        let imagePath = '';
        let iconPath = '';
  
        // Handle image upload
        if (data.image && data.image.name) {
          await fs.mkdir("public/offers/images", { recursive: true });
          imagePath = `/offers/images/${crypto.randomUUID()}-${data.image.name}`;
          const buffer = Buffer.from(await data.image.arrayBuffer());
          await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        }
  
        // Handle icon upload
        if (data.icon && data.icon.name) {
          await fs.mkdir("public/offers/icons", { recursive: true });
          iconPath = `/offers/icons/${crypto.randomUUID()}-${data.icon.name}`;
          const buffer = Buffer.from(await data.icon.arrayBuffer());
          await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
        }
  
        // Fetch the IDs of the services by their names
        const serviceRecords = await prisma.service.findMany({
          where: {
            name: {
              in: services, // Find all services whose name is in the provided array
            },
          },
          select: {
            id: true, // Only select the id field
          },
        });
  
        // Fetch the IDs of the locations by their names
        const locationRecords = await prisma.location.findMany({
          where: {
            country: {
              in: locations, // Find all locations whose name is in the provided array
            },
          },
          select: {
            id: true, // Only select the id field
          },
        });
  
        // Create the offer first
        const basic = await prisma.offer.create({
          data: {
            title: data.title,
            titleAr: data.titleAr,
            discount: data.discount,
            description: data.description,
            descriptionAr: data.descriptionAr,
            startDate: data.startDate,
            endDate: data.endDate,
            image: imagePath,
            icon: iconPath,
            userId: userId,
          },
        });
  
        // Fetch current associations for services and locations (if any exist)
        const existingOffer = await prisma.offer.findUnique({
          where: { id: basic.id },
          select: {
            service: { select: { id: true } }, // Fetch already associated services
            location: { select: { id: true } }, // Fetch already associated locations
          },
        });
  
        const existingServiceIds = existingOffer?.service.map(service => service.id) || [];
        const existingLocationIds = existingOffer?.location.map(location => location.id) || [];
  
        // Filter out services and locations that are already associated
        const newServicesToAssociate = serviceRecords.filter(service => !existingServiceIds.includes(service.id));
        const newLocationsToAssociate = locationRecords.filter(location => !existingLocationIds.includes(location.id));
  
        // Update the offer to connect the new services and locations (if any)
        if (newServicesToAssociate.length > 0 || newLocationsToAssociate.length > 0) {
          await prisma.offer.update({
            where: { id: basic.id },
            data: {
              service: {
                connect: newServicesToAssociate.map(service => ({ id: service.id })),
              },
              location: {
                connect: newLocationsToAssociate.map(location => ({ id: location.id })),
              },
            },
          });
        }
  
        return basic.id;
  
      } else {
        console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
        throw new Error('Schema validation failed');
      }
    } catch (error) {
      console.log("[addOffer] " + error);
      throw error;
    }
  }
  
// creating offer  info
export async function  addfOffer(data:FormData,locations:string[],services:string[]):Promise<string>{
    try {
     const result = OfferSchema.safeParse(Object.fromEntries(data.entries()))
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
         await fs.mkdir("public/offers/images", { recursive: true })
         imagePath = `/offers/images/${crypto.randomUUID()}-${data.image.name}`
         const buffer = Buffer.from(await data.image.arrayBuffer());
         await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
         }
         if(data.icon && data.icon.name){
            await fs.mkdir("public/offers/icons", { recursive: true })
            iconPath = `/offers/icons/${crypto.randomUUID()}-${data.image.name}`
            const buffer = Buffer.from(await data.icon.arrayBuffer());
            await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
            }
         const basic = await prisma.offer.create({
           data: {
             title : data.title,
             titleAr : data.titleAr,
             discount : data.discount,
             description : data.description,
             descriptionAr : data.descriptionAr,
             startDate : data.startDate,
             endDate : data.endDate,
             image : imagePath,
             icon : iconPath,
             userId : userId,
           },
         });         
         return basic.id;
      
     }else {
      console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
        throw new Error ('Schema not converted ')
     }
    } catch (error) {
        console.log("[addOffer]" + error)
        throw error;
     }
   }