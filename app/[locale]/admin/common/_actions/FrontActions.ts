
"use server"
import { Category, HeroSection, PageSection, Post, Tag } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds, getTagsNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import { PhaseSchema } from "../../service/phases/utils/PhaseSchema";
import { z } from "zod"
import fs from "fs/promises"
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";

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

  export async function getHeroData():Promise<HeroSection>{
    try {
      const meta = await prisma.heroSection.findFirst({
        where : {
          pageName : 'mainPage'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[getHeroData]"+ error)
      throw error;
    }
  }



  // Get All Phases 
  export async function getPhaseElements():Promise<PhaseWithModels[]>{
    try {
      const elements = await prisma.phase.findMany({
        take : 4,
        where : {
          phaseType : 'company'
        },
        include : {
          steps : true
        }
        
      })
        console.log(elements.length)
      return elements as PhaseWithModels[];
    } catch (error) {
      console.log('[getPhaseElements]'+ error);
      throw error;
    }
  }
  
  export async function gethaseMeta():Promise<PageSection>{
    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'workPhase'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[gethaseMeta]"+ error)
      throw error;
    }
  }

  export async function getBlogMeta():Promise<PageSection>{
    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'blog'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[getBlogMeta]"+ error)
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
  

  export async function getForntBlogs():Promise<Post[]>{

    try {
      const posts = await prisma.post.findMany({
        take: 2, // Retrieve the first 10 categories
      });
      return posts!;
    } catch (error) {
      console.log("[getForntBlogs]"+ error)
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