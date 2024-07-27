"use server"
import prisma from "../../../../utils/prisma";
import { number, z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
// import { handler } from '@/pages/api/auth/[...nextauth]';
// import { handler } from '@/app/api/auth/[...nextauth]/route';
import { NextApiRequest, NextApiResponse } from 'next';


import { BasicServiceInfo } from "../utils/BasicServiceInfo";
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { BasicInfo } from "../utils/BasicInfo";
import { BasicSchema } from "../utils/BasicSchema";
import { Category, Service, Tag, Tool } from "@prisma/client";
import { ServiceWCategory } from "../utils/ServiceWCategory";


// const fileSchema = z.instanceof(File, { message: "Required" })
// const imageSchema = fileSchema.refine(
//   file => file.size === 0 || file.type.startsWith("image/")
// )

// const addSchema = z.object({
//   name: z.string().min(1),
//   description: z.string().min(1),
//   priceInCents: z.coerce.number().int().min(1),
//   file: fileSchema.refine(file => file.size > 0, "Required"),
//   image: imageSchema.refine(file => file.size > 0, "Required"),
// })


// Adding Servcie category
export async function addServiceCategory(serviceId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.serviceCategory.findMany({
      where: {
        serviceId: serviceId
      },
      select: {
        categoryId: true
      }
    });
    const existingToolIds = existingCats.map(cat => cat.categoryId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId }
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const toolsExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId
      },
      data: {
        categories: {
          create: newIds.map(catId => ({
            category: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const catIds: number[] = updatedService.categories.map(cat => cat.categoryId);
    const names = await getCategoryNamesByIds(catIds); // Ensure this function is async if needed
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function addServiceTag(serviceId: number, ids: number[]): Promise<string[]> {
  try {
    const existingTags = await prisma.serviceTag.findMany({
      where: {
        serviceId: serviceId
      },
      select: {
        tagId: true
      }
    });
    const existingTagIds = existingTags.map(tag => tag.tagId);
    const newTagIds = ids.filter(id => !existingTagIds.includes(id));

    if (newTagIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId }
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const toolsExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tools do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId
      },
      data: {
        tags: {
          create: newTagIds.map(tagId => ({
            taf: { connect: { id: tagId } }
          }))
        }
      },
      include: {
        tags: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const elmIds: number[] = updatedService.tags.map(tag => tag.tagId);
    const names = await getTagsNamesByIds(elmIds); 
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



export async function addServiceTool(serviceId: number, ids: number[]): Promise<string[]> {
  try {
    const existingTools = await prisma.serviceTool.findMany({
      where: {
        serviceId: serviceId
      },
      select: {
        toolId: true
      }
    });
    const existingToolIds = existingTools.map(tool => tool.toolId);
    const newToolIds = ids.filter(toolId => !existingToolIds.includes(toolId));

    if (newToolIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId }
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const toolsExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tools do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId
      },
      data: {
        tools: {
          create: newToolIds.map(toolId => ({
            tool: { connect: { id: toolId } }
          }))
        }
      },
      include: {
        tools: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const toolIds: number[] = updatedService.tools.map(tool => tool.toolId);
    const names = await getToolsNamesByIds(toolIds); 
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



export async function updateServiceWithCategories(serviceId: number, categoryIds: number[]):Promise<string[]> {
  try {
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const categoriesExist = await prisma.category.findMany({
      where: {
        id: { in: categoryIds },
      },
    });
    if (categoriesExist.length !== categoryIds.length) {
      throw new Error(`One or more categories do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId,
      },
      data: {
        categories: {
          create: categoryIds.map((categoryId) => ({
            category: { connect: { id: categoryId } },
          })),
        },
      },
      include: {
        categories: true,
      },
    });

    console.log('Service updated successfully:', updatedService);
  
      const categds: number[] = updatedService.categories.map(category => category.categoryId);

       const names =  getCategoryNamesByIds(categds);
       
       


    return names;
  } catch (error) {
    console.error('Error updating service with categories:', error);
  } finally {
    await prisma.$disconnect();
  }
  return [];
}
export async function getTagsNamesByIds(ids: number[]): Promise<string[]> {
  const elements = await prisma.tag.findMany({
      where: {
          id: {
              in: ids
          }
      },
      select: {
          name: true
      }
  });
  const names = elements.map(element => element.name);
  return names;
}


export async function getToolsNamesByIds(categoryIds: number[]): Promise<string[]> {
  const tool = await prisma.tool.findMany({
      where: {
          id: {
              in: categoryIds
          }
      },
      select: {
          name: true
      }
  });
  const names = tool.map(tool => tool.name);
  return names;
}

export async function getCategoryNamesByIds(categoryIds: number[]): Promise<string[]> {
  const categories = await prisma.category.findMany({
      where: {
          id: {
              in: categoryIds
          }
      },
      select: {
          name: true
      }
  });
  const names = categories.map(category => category.name);
  return names;
}



export async function getCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany({
  });
  return categories;
}

// export async function getAllServices(): Promise<ServiceWCategory[]> {
//   const services = await prisma.service.findMany({
//     include: {
//       categories: true,
//     },
//   });
  
//   console.log("0099999"+services)
//   return services as  ServiceWCategory[];
// }
export async function getAllServices(): Promise<ServiceWCategory[]> {
  const services = await prisma.service.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });
  console.log("Fetched Services:", services);
  return services as ServiceWCategory[];
}


export async function getServiceWCategorylById(serviceId:number):Promise<string[] >{
  const serviceWithTools = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
    include: {
      categories: {
        include: {
          category: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = serviceWithTools?.categories || [];
  const toolNames: string[] = associatedTools.map(assocTool => assocTool.category.name);
  return toolNames;
}

// get service Tags
export async function getServiceWTagById(serviceId:number):Promise<string[] >{
  const elements = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
    include: {
      tags: {
        include: {
          taf: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = elements?.tags || [];
  const toolNames: string[] = associatedTools.map(assoc => assoc.taf.name);
  return toolNames;
}


// get service Tools
export async function getServiceWToolById(serviceId:number):Promise<string[] >{
  const serviceWithTools = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
    include: {
      tools: {
        include: {
          tool: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = serviceWithTools?.tools || [];
  const toolNames: string[] = associatedTools.map(assocTool => assocTool.tool.name);
  return toolNames;
}


// Get all Tools
export async function getTools(): Promise<Tool[]> {
  const tools = await prisma.tool.findMany({
  });
  return tools;
}



export async function getServices(): Promise<Service[]> {
  const services = await prisma.service.findMany({
    // include: {
    //   user: {
    //     select: {
    //       user_name: true,
    //     },
    //   },
    // },
  });
  
  return services;
}


  export async function  addBasic(data:FormData):Promise<number>{
   console.log("service ---- "+JSON.stringify(data, null, 2)
  );
    const result = BasicSchema.safeParse(Object.fromEntries(data.entries()))
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session.user.id;
    if (result.success) {
      const data = result.data;
      const nameSlug = slugify(data.name);
      try {
        const basic = await prisma.service.create({
          data: {
            name: data.name,
            name_slug: nameSlug,
            title : data.title,
            description : data.description,
            userId : userId
          },
        });
        console.log("service id ---", basic.id);
        const serviceId = basic.id;
        return serviceId;
      } catch (error) {
        
        throw new Error('Error creating basic info ');
      }
    }
    return 0;
  }


export async function addBasicInfo(data:BasicServiceInfo) {

  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;
    console.log("server action"+ data?.service_name);
    const nameSlug = slugify(data.service_name);
    try {
      const newService = await prisma.service.create({
        data: {
          name: data.service_name,
          name_slug: nameSlug,
          userId : userId
        },
      });
      console.log("server action", newService);
      return newService;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Error creating service');
    }

//   const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
//   if (result.success === false) {
//     return result.error.formErrors.fieldErrors
//   }

//   const data = result.data

//   await fs.mkdir("services", { recursive: true })
//   const filePath = `services/${crypto.randomUUID()}-${data.file.name}`
//   await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))

//   await fs.mkdir("public/services", { recursive: true })
//   const imagePath = `/services/${crypto.randomUUID()}-${data.image.name}`
//   await fs.writeFile(
//     `public${imagePath}`,
//     Buffer.from(await data.image.arrayBuffer())
//   )

}