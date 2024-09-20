"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { Service, Task } from "@prisma/client";
import { ServiceWithModels } from "@/app/[locale]/admin/service/utils/ServiceWithModels";

export async function getServices():Promise<Service[]>{
    try {       
        const service = await prisma.service.findMany({

        })    
      return  service;  
     
    } catch (error) {
        console.error('Error updating service with tools:', error);
        throw error;
      } finally {
        await prisma.$disconnect();
      }
}