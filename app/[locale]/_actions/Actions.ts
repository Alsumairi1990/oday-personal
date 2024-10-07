"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { Service, Task } from "@prisma/client";
import { ServiceWithModels } from "@/app/[locale]/admin/service/utils/ServiceWithModels";
import { getServicesFromCache, setServicesToCache } from "../admin/common/cache/ServicesCach";

export async function getServices():Promise<Service[]>{
    try {       
      let cachedData = getServicesFromCache();
      if (cachedData) {
        return cachedData;
      }
        const services = await prisma.service.findMany({
        })    
        setServicesToCache(services)
      return  services;  
     
    } catch (error) {
        console.error('Error updating service with tools:', error);
        throw error;
      } finally {
        await prisma.$disconnect();
      }
}