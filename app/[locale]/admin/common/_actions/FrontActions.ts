
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
import { ServiceForFront } from "../../service/utils/ServiceForFront";
import { CategoryFrontSingle } from "../../category/util/CategoryFrontSingle";
import { getCategoriesFromCache, setCategoriesToCache } from "../cache/CategoriesCache";
import { getPhasessFromCache, setPhasesToCache } from "../cache/PhasesCach";
import { getWorksHomePageCache, setWorksHomePageCache } from "../cache/WorksMainPageCach";
import { getTestimonialsFromCache, setTestimonialToCache } from "../cache/TestimonialsHomeCach";
import { getIndustriesFromCache, setIndustriesToCache } from "../cache/IndustriesHomeCach";
import { getServiceFromCache, setServiceToCache } from "../cache/ServiceFrontCache";

export async function getServiceBySlug(slug:string):Promise<ServiceForFront>{

  try {
    console.log("slug --------" + slug);
    let cachedData = getServiceFromCache();
    if (cachedData) {
      return cachedData;
    }
    const services = await prisma.service.findFirst({
      where : {
        name_slug : slug
      },
      include: {
        tools: {
          include: {
            tool: true, // Include related Service details
          },
        },
        tags: {
          include: {
            tag: true, // Include related Service details
          },
        },
        categories: {
          include: {
            category: true, // Include related Service details
          },
        },
        works: true,
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
        },
        industries : true,
        testimonials : true,
      },
    });
    console.log("Icoooooooooooon"+services?.icon)
    setServiceToCache(services as ServiceForFront);
    return services as ServiceForFront;
  } catch (error) {
    console.log("[getServiceBySlug]"+ error)
    throw error;
  }
}




export async function getServiceMeta():Promise<PageSection>{
  try {
    const meta = await prisma.pageSection.findFirst({
      where : {
        name : 'services'
      }
    })
    return meta!;
  } catch (error) {
    console.log("[getAboutUsData]"+ error)
    throw error;
  }
}


  export async function getTesimonialsFront():Promise<Testimonial[]>{
    try {
      let cachedData = getTestimonialsFromCache();
      if (cachedData) {
        return cachedData;
      }
      const result = await prisma.testimonial.findMany({
        take : 3
      })
      setTestimonialToCache(result);
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
      let cachedData = getIndustriesFromCache();
      if (cachedData) {
        return cachedData;
      }
      const results = await prisma.industry.findMany({
      take : 8
      })
      setIndustriesToCache(results)
      return results;
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
  export async function getHeroData(name:string):Promise<HeroSection>{
    try {
      const meta = await prisma.heroSection.findFirst({
        where : {
          pageName : name
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
      let cachedData = getPhasessFromCache();
      if (cachedData) {
        return cachedData;
      }
      const elements = await prisma.phase.findMany({
        
        where : {
          phaseType : 'company'
        },
        include : {
          steps : true
        }
        
      })
        console.log(elements.length)
        setPhasesToCache(elements);
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
      let cachedData = getWorksHomePageCache();
      if (cachedData) {
        return cachedData;
      }
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
      setWorksHomePageCache(results as WorksFrontData[]);
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

  export async function getServiceCategories():Promise<CategoryFrontSingle[]>{

    try {
      const categories = await prisma.category.findMany({
        distinct: ['id'], // Ensure no duplicates based on the category ID
        include: {
          services: true, // Include related services
          _count: {
            select: {
              services: true, // Count the number of services for each category
            },
          },
        },
      });
      
      return categories as CategoryFrontSingle[];
    } catch (error) {
      console.log("[getServiceCatMeta]"+ error)
      throw error;
    }
  }
  export async function getServiceCategory():Promise<Category[]>{

    try {
      let cachedData = getCategoriesFromCache();
      if (cachedData) {
        return cachedData;
      }
      const categories = await prisma.category.findMany({
        take: 10, // Retrieve the first 10 categories
        distinct: ['id'], // Ensure no duplicates based on the category ID
        include: {
          services: true, // Include related services
        },
      });
      setCategoriesToCache(categories);
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

 