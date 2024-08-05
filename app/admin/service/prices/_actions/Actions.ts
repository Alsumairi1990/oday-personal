"use server"
import { Price } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { PriceWithModels } from "../utils/PriceWithModels";



// Get service priceses by service id from price model
export async function getServicePricesById(serviceId: number): Promise<PriceWithModels[]> {
    console.log("in get service price by id");
    const prices = await prisma.price.findMany({
        where: {
          serviceId: Number(serviceId),
        },
        include: {
          service: true,
          location: true,
        },
      });
     
    
    return prices as PriceWithModels[];
  }