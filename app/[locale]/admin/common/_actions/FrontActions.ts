
"use server"
import { AboutUsSection, Category, HeroSection, Industry, PageSection, Post, Tag, Testimonial } from "@prisma/client";
import prisma from "../../../../../utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds, getTagsNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import { PhaseSchema } from "../../service/phases/utils/PhaseSchema";
import { z } from "zod"
import fs from "fs/promises"
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";
import { WorksFrontData } from "../../works/utils/WorksFrontData";
import { CategoryForFront } from "../../category/util/CategoryForFront";
import { isSlug } from "validator";

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
  export async function getTesimonialsFront():Promise<Testimonial[]>{
    try {
      const result = await prisma.testimonial.findMany({
        take : 3
      })
      return result!;
    } catch (error) {
      console.log("[getAboutUsData]"+ error)
      throw error;
    }
  }
  export async function getTesimonialsMeta():Promise<PageSection>{
    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'testimonials'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[getAboutUsData]"+ error)
      throw error;
    }
  }


  export async function getIndustries():Promise<Industry[]>{
    try {
      
      const meta = await prisma.industry.findMany({
      take : 8
      })
      return meta;
    } catch (error) {
      console.log("[getInsustries]"+ error)
      throw error;
    }
  }

  export async function getAboutUsData():Promise<AboutUsSection>{
    try {
      const meta = await prisma.aboutUsSection.findFirst({
        where : {
          name : 'homePage'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[getAboutUsData]"+ error)
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
  
  export async function getWorkMeta():Promise<PageSection>{
    try {
      const meta = await prisma.pageSection.findFirst({
        where : {
          name : 'works'
        }
      })
      return meta!;
    } catch (error) {
      console.log("[gethaseMeta]"+ error)
      throw error;
    }
  }

  
  export async function getWorksMainPage():Promise<WorksFrontData[]>{
    try {
      
      const results = await prisma.work.findMany({
        take :6,
        include: {
          categories: {
            include: {
              category: {
                select: {
                  name: true, // Replace 'name' with the actual field in the Category model if it's different
                  nameAr : true
                },
              },
            },
          },
          service: {
            select: {
              name: true, // This fetches the 'name' field from the Service model
              nameAr : true
            },
          },
        },
      });
      
      return results as WorksFrontData[];
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

  export async function getCategoryForFront(slug:string):Promise<CategoryForFront>{

    try {
      const categoryWithServicesAndWorks = await prisma.category.findUnique({
        where : {
          slug : slug
        },
        include: {
          services: {
            include: {
              service: true, // Include related Service details
            },
          },
          works: {
            include: {
              service: true, // Include related Work details
            },
          },
          phases : {
            include : {
              steps : true
            }
          },
          products: true,
          clients : {
            select : {
              companyName: true,
              image : true
            }
          }
        },
      });
      return categoryWithServicesAndWorks as CategoryForFront;
    } catch (error) {
      console.log("[getServiceCatMeta]"+ error)
      throw error;
    }
  }

 