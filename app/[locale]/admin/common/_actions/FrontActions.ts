
"use server"
import { Category, PageSection, Tag } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds, getTagsNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import { PhaseSchema } from "../../service/phases/utils/PhaseSchema";
import { z } from "zod"
import fs from "fs/promises"

export async function getServiceMeta():Promise<PageSection>{

    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'services'
        }
      })
      console.log("Service Meta " + meta?.name)
      return meta!;
    } catch (error) {
      console.log("[getServiceMeta]"+ error)
      throw error;
    }
  }


  export async function getServiceCatMeta():Promise<PageSection>{

    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'servicesCategory'
        }
      })
      console.log("Service Meta " + meta?.name)
      return meta!;
    } catch (error) {
      console.log("[getServiceCatMeta]"+ error)
      throw error;
    }
  }
  

  export async function getServiceCategory():Promise<Category[]>{

    try {
      const categories = await prisma.category.findMany({
        take: 10, // Retrieve the first 10 categories
        distinct: ['id'], // Ensure no duplicates based on the category ID
        include: {
          services: true, // Include related services
        },
      });
      return categories!;
    } catch (error) {
      console.log("[getServiceCatMeta]"+ error)
      throw error;
    }
  }