"use server"
import prisma from "../../../../utils/prisma";
import { number, z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { BasicServiceInfo } from "../utils/BasicServiceInfo";
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { BasicInfo } from "../utils/BasicInfo";
import { BasicSchema } from "../utils/BasicSchema";
import { Category, Phase, Service, Tag, Tool, Work } from "@prisma/client";
import { ServiceWCategory } from "../utils/ServiceWCategory";
import { Icons } from "react-toastify";
import { MediaSchema } from "../utils/MediaSchema";
import { ServiceWithModels } from "../utils/ServiceWithModels";
import { PriceSchema } from "../utils/PriceSchema";

// addding work to service with 'ServiceWithModel' return object
export async function addServiceWorks(serviceId:number , ids:number[]):Promise<ServiceWithModels>{
  try {
    console.log("add service wotk -- Start")
      const updatePromises = ids.map( workId => 
       prisma.work.update({
          where: { id: workId },
          data: { serviceId: serviceId },
        })
        
      );
      const updatedWorks = await Promise.all(updatePromises);
      const updated = await prisma.service.findUnique({
        where: { id: serviceId },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
          tools: {
            include: {
              tool: true,
            },
          },
          works: true,
          phases: true,
          user : true
        },
       
      });
      
      return updated as ServiceWithModels;
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
}

// Remove Service Tool  with return 'ServiceWithModel' object
export async function removeServiceWork(serviceId: number, name: string): Promise<ServiceWithModels> {
  try {
    const work = await prisma.work.findFirst({
      where: { title: name },
      select: { id: true }
    });
    if (!work) {
      throw new Error('Work Not Exist');
    }
    const updatedWork = await prisma.work.update({
      where: { id: work.id }, 
      data: { serviceId: null },
    });

    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
     
    });
    // const names = await getToolsNamesByIds(toolIds);
    return removed as ServiceWithModels;
    
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Remove Service Tool  with return 'ServiceWithModel' object
export async function removeServiceTool(serviceId: number, name: string): Promise<ServiceWithModels> {
  try {
    const nameSlug = slugify(name);
    console.log("tool before remove: " + name);
    
    const tool = await prisma.tool.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!tool) {
      throw new Error('tag Not Exist');
    }
    const toolId = tool.id;
    await prisma.serviceTool.delete({
      where: { serviceId_toolId: { serviceId, toolId } }
    });
    
    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return removed as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Category to Service
export async function addServiceTools(serviceId:number , ids:number[]):Promise<ServiceWithModels | null >{
  try {
    const existingCats = await prisma.serviceTool.findMany({
      where: {
        serviceId: serviceId
      },
      select: {
        toolId: true
      }
    });
    const existingToolIds = existingCats.map(elm => elm.toolId);
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
    const toolsExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tool do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId
      },
      data: {
        tools: {
          create: newIds.map(catId => ({
            tool: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return updatedService as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Remove Service Tag  with return 'ServiceWithModel' object
export async function removeServiceTag(serviceId: number, name: string): Promise<ServiceWithModels> {
  try {
    const nameSlug = slugify(name);
    console.log("tag before remove: " + name);
    
    const tag = await prisma.tag.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!tag) {
      throw new Error('tag Not Exist');
    }
    const tagId = tag.id;
    await prisma.serviceTag.delete({
      where: { serviceId_tagId: { serviceId, tagId } }
    });
    
    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return removed as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Tag to Service
export async function addServiceTags(serviceId:number , ids:number[]):Promise<ServiceWithModels | null >{
  try {
    const existingCats = await prisma.serviceTag.findMany({
      where: {
        serviceId: serviceId
      },
      select: {
        tagId: true
      }
    });
    const existingToolIds = existingCats.map(elem => elem.tagId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tags IDs are already associated with the service');
    }
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId }
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const toolsExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tag do not exist.`);
    }
    const updatedService = await prisma.service.update({
      where: {
        id: serviceId
      },
      data: {
        tags: {
          create: newIds.map(catId => ({
            tag: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return updatedService as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Remove Service Category  with return 'ServiceWithModel' object
export async function removeServiceCategory(serviceId: number, name: string): Promise<ServiceWithModels> {
  try {
    const nameSlug = slugify(name);
    console.log("category before remove: " + name);
    
    const category = await prisma.category.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!category) {
      throw new Error('Category Not Exist');
    }
    const categoryId = category.id;
    await prisma.serviceCategory.delete({
      where: { serviceId_categoryId: { serviceId, categoryId } }
    });
    
    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return removed as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Category to Service
export async function addServiceCategories(serviceId:number , ids:number[]):Promise<ServiceWithModels | null >{
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
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        tools: {
          include: {
            tool: true,
          },
        },
        works: true,
        phases: true,
        user : true
      },
    });
    return updatedService as ServiceWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// get all services with models 
export async function getServicesWithModels(): Promise<ServiceWithModels[]> {
  const services = await prisma.service.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      tools: {
        include: {
          tool: true,
        },
      },
      works: true,
      phases: true,
      user : true
    },
  });
  console.log("Fetched Services:", services);
  return services as ServiceWithModels[];
}


// Edit Service Description 
export async function editServiceContent(id:number , content:string):Promise<ServiceWithModels>{
  const result = await prisma.service.update({
   where : {
     id : id
   },
   data : {
     description : content
   },
   include: {
    categories: {
      include: {
        category: true,
      },
    },
    tags: {
      include: {
        tag: true,
      },
    },
    tools: {
      include: {
        tool: true,
      },
    },
    works: true,
    phases: true,
    user : true
  },
  })
  return result as ServiceWithModels;
}
// Editing Service Image 
export async function editServiceIcon(testimonialId:number,formData:FormData):Promise<ServiceWithModels | null>{
  const iconFile = formData.get('icon') as File;
  let iconPath:string = ''; 
  if(iconFile && iconFile.name){
    await fs.mkdir("public/services/icons", { recursive: true })
    iconPath = `/services/icons/${crypto.randomUUID()}-${iconFile.name}`;
    console.log("image path"+iconPath);
    await fs.writeFile(
      `public${iconPath}`,
      Buffer.from(await iconFile.arrayBuffer())
      )
  
      const updated = await prisma.service.update({
        where : {
          id : testimonialId
        },
        data : {
          icon : iconPath
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
          tools: {
            include: {
              tool: true,
            },
          },
          works: true,
          phases: true,
          user : true
        },
  
      })
  return updated as ServiceWithModels;
  }
  return null;
  }



// Editing Service Image 
export async function editServiceImage(testimonialId:number,formData:FormData):Promise<ServiceWithModels | null>{
  const imageFile = formData.get('image') as File;
  let imagePath:string = ''; 
  if(imageFile && imageFile.name){
    await fs.mkdir("public/services/images", { recursive: true })
    imagePath = `/services/images/${crypto.randomUUID()}-${imageFile.name}`;
    console.log("image path"+imagePath);
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await imageFile.arrayBuffer())
      )
  
      const updated = await prisma.service.update({
        where : {
          id : testimonialId
        },
        data : {
          image : imagePath
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
          tools: {
            include: {
              tool: true,
            },
          },
          works: true,
          phases: true,
          user : true
        },
  
      })
  return updated as ServiceWithModels;
  }
  return null;
  }




// Edit basic Data 
export async function editServiceBasicData(id:number, data:FormData):Promise<ServiceWithModels>{
  const title:string= data.get('title') as string;
  const name:string= data.get('name') as string;


  const ratingValue:string = data.get('price') as string;

  const result = await prisma.service.update({
    where : {
      id :id
    },
    data :{
      title : title,
      name : name,
      price : Number(ratingValue),

    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      tools: {
        include: {
          tool: true,
        },
      },
      works: true,
      phases: true,
      user : true
    },
  })
  return result as ServiceWithModels;
}





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
            tag: { connect: { id: tagId } }
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


// Adding Works to service
export async function addServiceWork(serviceId: number, ids: number[]): Promise<string[]> {
  
  try {
  console.log("add service wotk -- Start")
    const updatePromises = ids.map( workId => 
     prisma.work.update({
        where: { id: workId },
        data: { serviceId: serviceId },
      })
      
    );
    const updatedWorks = await Promise.all(updatePromises);
    updatedWorks.map((ddd)=> console.log(ddd))
    ids.map( (f) => console.log(f))
    console.log(serviceId)

    console.log("add service wotk -- end")


    const works = await prisma.work.findMany({
      where: { serviceId: serviceId },
      select:{
        title : true
      }
    });
    works.map( (f) => console.log("----"+f.title))
    console.log("add service wotk -- end"+works.length)
  
    const names: string[] = works.map(tool => tool.title);
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Adding tool to Service
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

// Get serivce by id with related catefories
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
          tag: {
            select: {
              name: true,
            },
          }
        },
      },
    },
  });
  const associatedTools = elements?.tags || [];
  const toolNames: string[] = associatedTools.map(assoc => assoc.tag.name);
  return toolNames;
}

// get service Tools
export async function getServiceWWorksById(serviceId:number):Promise<string[] >{
  const serviceWithTools = await prisma.work.findMany({
    where: {
      serviceId: serviceId,
    },
    select: {
       title : true
    }
    
  });
  const toolNames: string[] = serviceWithTools.map(assoc => assoc.title);
  return toolNames;
}

// get service Phases
export async function getServicePhasesById(serviceId:number):Promise<Phase[] >{
  const phases = await prisma.phase.findMany({
    where: {
      serviceId: serviceId,
    },
  });
  return phases;
}
// Delete Service/services  by passing 'ids'
export async function deleteServices(ids:string[]): Promise<number> {
  try {
    const numberIds = ids.map(id => Number(id));
      const result = await prisma.service.deleteMany({
        where: {
          id: {
            in: numberIds
          }
        }
      });
  return result.count;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Adding Service Iamges 

export async function addingServiceImages(data:FormData, serviceId: number): Promise<Service | null> {
  try {
    
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId }
    });
    if (!serviceExists) {
      throw new Error(`Service with ID ${serviceId} does not exist.`);
    }
    const result = MediaSchema.safeParse(Object.fromEntries(data.entries()))
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
        await fs.mkdir("public/service/images", { recursive: true })
        imagePath = `/service/images/${crypto.randomUUID()}-${data.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await data.image.arrayBuffer())
          )
        }
  
        if(data.icon && data.icon.name){
          await fs.mkdir("public/service/icons", { recursive: true })
          iconPath = `/service/icons/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
          const updatedService = await prisma.service.update({
            where: {
              id: serviceId
            },
            data: {
              icon : iconPath,
              image : imagePath
            },
            
          });
          
        }
        const updatedService = await prisma.service.findUnique({
          where: {
            id: serviceId
          },
        });
   return updatedService;
    
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Get Service Images by Id 
export async function getServiceImagesById(serviceId:number):Promise<Service | null>{
  const service = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
   
  });
  
  return service;
}

//Adding Service Price details based on location
export async function addServicePrice(data:FormData,serviceId:number,locationId:number):Promise<string | undefined>{
  try {
    
    console.log("in add price --- ")
    const result = PriceSchema.safeParse(Object.fromEntries(data.entries()))
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error('User not authenticated');
    }
  
    const userId = session.user.id;
  
    if (result.success) {
      console.log("in success price --- ")
      const data = result.data; 
      let imagePath = '';
      let iconPath = '';
      
      if(data.image && data.image.name){
        await fs.mkdir("public/service/images", { recursive: true })
        imagePath = `/service/images/${crypto.randomUUID()}-${data.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await data.image.arrayBuffer())
          )
        }
  
          const newPrice = await prisma.price.create({
            data: {
              amount: data.amount, 
              startPrice: data.startPrice, 
              median: data.median, 
              currency: data.currency, 
              discount: data.discount, 
              effectiveDate: data.effectiveDate,
              expiryDate: data.expiryDate, 
              description: data.description,
              image: imagePath, 
              serviceId: serviceId, 
              locationId: locationId, 
            },
          });
          return newPrice.id;
        }
  } catch (error) {
    
}
  
}
// get service data By ID
export async function getServiceWModelsById(serviceId:number):Promise<ServiceWithModels | null >{
  const service = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      tools: {
        include: {
          tool: true,
        },
      },
      works: true,
      phases: true,
      user : true
    },
  });
  return service as ServiceWithModels;
}

// get service Name By ID
export async function getServiceById(serviceId:number):Promise<Service | null >{
  const service = await prisma.service.findUnique({
    where: {
      id: serviceId,
    },
  });
  return service;
}


// get service Phases' names
export async function getServiceWPhasesById(serviceId:number):Promise<string[] >{
  const serviceWithTools = await prisma.phase.findMany({
    where: {
      serviceId: serviceId,
    },
    select: {
       name : true
    }
    
  });
  const toolNames: string[] = serviceWithTools.map(assoc => assoc.name);
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


// Get all Works
export async function getWorks(): Promise<Work[]> {
  const elements = await prisma.work.findMany({
  });
  return elements;
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