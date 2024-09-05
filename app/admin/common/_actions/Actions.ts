"use server"
import { Category, Tag } from "@prisma/client";
import prisma from "../../../../utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds, getTagsNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import { PhaseSchema } from "../../service/phases/utils/PhaseSchema";
import { z } from "zod"
import fs from "fs/promises"


//Get All Tags
export async function getTags(): Promise<Tag[]> {
  const tags = await prisma.tag.findMany({
  });
  return tags;
}


//Get All Categories

export async function getCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany({
  });
  return categories;
}

// Get tool names by ids
export async function getWorkNamesByIds(ids: number[]): Promise<string[]> {
  const tool = await prisma.work.findMany({
      where: {
          id: {
              in: ids
          }
      },
      select: {
          title: true
      }
  });
  const names = tool.map(tool => tool.title);
  return names;
}



// Get tool names by ids
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


// Remove work Tool
export async function removeWorkTool(workId: number, name: string): Promise<string[]> {
  try {
    const nameSlug = slugify(name);
    const tool = await prisma.tool.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    
    if (!tool) {
      throw new Error('Tool Not Exist');
    }
    
    const toolId = tool.id;
    
    await prisma.workTool.delete({
      where: { workId_toolId: { workId, toolId } }
    });
    
    const removed = await prisma.work.findUnique({
      where: { id: workId },
      include: { tools: true }
    });
    
    const tagIds: number[] = removed ? removed.tools.map(tg => tg.toolId) : [];
    const names = await getWorkNamesByIds(tagIds);
    return names;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Remove work Tag
export async function removeWorkTag(workId: number, name: string): Promise<string[]> {
  try {
    const nameSlug = slugify(name);
    const tag = await prisma.tag.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    
    if (!tag) {
      throw new Error('Tag Not Exist');
    }
    
    const tagId = tag.id;
    
    await prisma.workTag.delete({
      where: { workId_tagId: { workId, tagId } }
    });
    
    const removed = await prisma.work.findUnique({
      where: { id: workId },
      include: { tags: true }
    });
    
    const tagIds: number[] = removed ? removed.tags.map(tg => tg.tagId) : [];
    const names = await getTagsNamesByIds(tagIds);
    return names;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Remove work Category
export async function removeWorkCategory(workId: number, name: string): Promise<string[]> {
  try {
    const nameSlug = slugify(name);
    const category = await prisma.category.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    
    if (!category) {
      throw new Error('Category Not Exist');
    }
    
    const categoryId = category.id;
    
    await prisma.workCategory.delete({
      where: { workId_categoryId: { workId, categoryId } }
    });
    
    const removed = await prisma.work.findUnique({
      where: { id: workId },
      include: { categories: true }
    });
    
    const categoryIds: number[] = removed ? removed.categories.map(category => category.categoryId) : [];
    const names = await getCategoryNamesByIds(categoryIds);
    return names;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Remove Service Category
export async function removeServiceCategory(serviceId: number, name: string): Promise<string[]> {
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
      include: { categories: true }
    });
    
    const categoryIds: number[] = removed ? removed.categories.map(category => category.categoryId) : [];
    const names = await getCategoryNamesByIds(categoryIds);
    
    return names;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Removing Service tag
export async function removeServiceTag(serviceId: number, name: string): Promise<string[]> {
  try {
    const nameSlug = slugify(name);
    const element = await prisma.tag.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!element) {
      throw new Error('Tool Not Exist');
    }
    const tagId = element.id;
    await prisma.serviceTag.delete({
      where: { serviceId_tagId: { serviceId, tagId } }
    });
    
    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: { tags: true }
    });
    const elementIds: number[] = removed ? removed.tags.map(elem => elem.tagId) : [];
    const names = await getTagsNamesByIds(elementIds);
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Removing service Phase
export async function removeServicePhase(serviceId: number, name: string): Promise<string[]> {
  try {
    // const nameSlug = slugify(name);
    const phase = await prisma.phase.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!phase) {
      throw new Error('phase Not Exist');
    }
    const updatedWork = await prisma.work.update({
      where: { id: phase.id }, // ID of the work you want to update
      data: { serviceId: null },
    });

    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: { phases: true }
    });
    const names: string[] = removed ? removed.phases.map(phase => phase.name) : [];
    // const names = await getToolsNamesByIds(toolIds);
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Removing service Work 
export async function removeServiceWork(serviceId: number, name: string): Promise<string[]> {
  try {
    // const nameSlug = slugify(name);
    const work = await prisma.work.findFirst({
      where: { title: name },
      select: { id: true }
    });
    if (!work) {
      throw new Error('Work Not Exist');
    }
    const updatedWork = await prisma.work.update({
      where: { id: work.id }, // ID of the work you want to update
      data: { serviceId: null },
    });

    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: { works: true }
    });
    const names: string[] = removed ? removed.works.map(tool => tool.title) : [];
    // const names = await getToolsNamesByIds(toolIds);
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Removing service tool 
export async function removeServiceTool(serviceId: number, name: string): Promise<string[]> {
  try {
    const nameSlug = slugify(name);
    console.log("tool before remove: " + name);
    const tool = await prisma.tool.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!tool) {
      throw new Error('Tool Not Exist');
    }
    const toolId = tool.id;
    await prisma.serviceTool.delete({
      where: { serviceId_toolId: { serviceId, toolId } }
    });
    const removed = await prisma.service.findUnique({
      where: { id: serviceId },
      include: { tools: true }
    });
    const toolIds: number[] = removed ? removed.tools.map(tool => tool.toolId) : [];
    const names = await getToolsNamesByIds(toolIds);
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// export async function removeServiceTool(serviceId:number,name:string):Promise<string[]>{
//   try {
//     const nameSlug = slugify(name);
//     console.log("tool before remove" + name);
//     const tool = await prisma.tool.findFirst({
//         where: {
//             slug: nameSlug
//         },
//         select: {
//             id: true
//         }
//     });
//   if(!tool){
//     throw new Error('Tool Not Exist');
//   }
//   const toolId = tool.id;
//   const removed2 = await prisma.serviceTool.delete({
//     where: {
//       serviceId_toolId: {
//         serviceId: serviceId,
//         toolId: toolId,
//       },
//     },
//   });
//   const removed = await prisma.service.findUnique({
//     where: {
//       id: serviceId,
//     },
//     include: {
//       tools: true,
//     },
//   });
//     let toolIds:number[] = [];
//     if(removed){toolIds= removed.tools.map(tool => tool.toolId);}
//     const names = await getToolsNamesByIds(toolIds);
//     return names;
//   } catch (error) {
//     throw error;
//   }

// }


// Creating New Tag with 'name,slug' columns for shortway creation 
async function createTag(name: string) : Promise<number> {
  let tag:number = 0;
  try {
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      const userId = session.user.id;
      const nameSlug = slugify(name);
      const existingTag = await prisma.tag.findFirst({
    where: {
      slug: nameSlug,
    },
  });

  if (existingTag) {
    throw new Error('Category with this name already exists.');
  }
  const newTag = await prisma.tag.create({
    data: {
      name:name,
      slug:nameSlug,
      userId:userId
    },
    select:{
      id: true
    }
  });
  tag = newTag.id;
  return tag;
      
  } catch (error) {
      console.log(error);
      throw error;
  }
}

// Creating New Tag with 'name,slug' columns for shorway creation 
async function addTag(name: string) : Promise<number> {
  let tag:number = 0;
  try {
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      const userId = session.user.id;
      const nameSlug = slugify(name);
      const existingTag = await prisma.tag.findFirst({
    where: {
      slug: nameSlug,
    },
  });

  if (existingTag) {
    throw new Error('Tag with this name already exists.');
  }
  const newTag = await prisma.tag.create({
    data: {
      name:name,
      slug:nameSlug,
      userId:userId
    },
    select:{
      id: true
    }
  });
  tag = newTag.id;
  return tag;
      
  } catch (error) {
      console.log(error);
      throw error;
  }
}



// Creating New Category with 'name,slug' columns for shorway creation 
export async function addCategoy(name: string) : Promise<number> {
  let caregory:number = 0;
  try {
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      const userId = session.user.id;
      const nameSlug = slugify(name);
      const existingCategory = await prisma.category.findFirst({
    where: {
      slug: nameSlug,
    },
  });

  if (existingCategory) {
    throw new Error('Category with this name already exists.');
  }
  const newCategory = await prisma.category.create({
    data: {
      name:name,
      slug:nameSlug,
      userId:userId
    },
    select:{
      id: true
    }
  });
  caregory = newCategory.id;
  return caregory;
      
  } catch (error) {
      console.log(error);
      throw error;
  }
}



//creaeting new tool
async function addTool(name: string) : Promise<number> {
    let caregory:number = 0;
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error('User not authenticated');
        }
        const userId = session.user.id;
        const nameSlug = slugify(name);
        const existingCategory = await prisma.tool.findFirst({
      where: {
        slug: nameSlug,
      },
    });
  
    if (existingCategory) {
      throw new Error('Category with this name already exists.');
    }
    const newCategory = await prisma.tool.create({
      data: {
        name:name,
        slug:nameSlug,
        userId:userId
      },
      select:{
        id: true
      }
    });
    caregory = newCategory.id;
    return caregory;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
    
  }


  //Adding New Catefory and associat it with service
export async function createServiceTag(serviceId: number, name:string): Promise<string> {
  try {     
  const elemId = await createTag(name); 
  const updatedService = await prisma.service.update({
      where: {
        id: serviceId,
      },
      data: {
        tags: {
          create: {
            tag: { connect: { id: elemId } },
          },
        },
      },
      include: {
        tags: true,
      },
    });
    console.log('Tool updated successfully:', updatedService);
    const elemName = await prisma.tag.findFirst({
      where: {
          id: elemId
      },
      select: {
          name: true
      }
  });
  let n:string = '';
  if(elemName){
      n = elemName.name; 
  }
  return n;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

//Adding New Tool and associat it with work
export async function createWorkTool(workId: number, name:string): Promise<string> {
  try {     
  const toolId = await addTool(name); 
  const element = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        tools: {
          create: {
            tool: { connect: { id: toolId } },
          },
        },
      },
      include: {
        tools: true,
      },
    });
    console.log('Tool updated successfully:', element);
    const toolName = await prisma.tool.findFirst({
      where: {
          id: toolId
      },
      select: {
          name: true
      }
  });
  let n:string = '';
  if(toolName){
      n = toolName.name; 
  }
  return n;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


//Adding New Tag and associat it with work
export async function createWorkTag(workId: number, name:string): Promise<string> {
  try {     
  const tagId = await addTag(name); 
  const updatedService = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        tags: {
          create: {
            tag: { connect: { id: tagId } },
          },
        },
      },
      include: {
        tags: true,
      },
    });
    console.log('Tool updated successfully:', updatedService);
    const tagName = await prisma.tag.findFirst({
      where: {
          id: tagId
      },
      select: {
          name: true
      }
  });
  let n:string = '';
  if(tagName){
      n = tagName.name; 
  }
  return n;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



//Adding New Category and associat it with work
export async function createWorkCategory(workId: number, name:string): Promise<string> {
  try {     
  const toolId = await addCategoy(name); 
  const updatedService = await prisma.work.update({
      where: {
        id: workId,
      },
      data: {
        categories: {
          create: {
            category: { connect: { id: toolId } },
          },
        },
      },
      include: {
        categories: true,
      },
    });
    console.log('Tool updated successfully:', updatedService);
    const toolName = await prisma.category.findFirst({
      where: {
          id: toolId
      },
      select: {
          name: true
      }
  });
  let n:string = '';
  if(toolName){
      n = toolName.name; 
  }
  return n;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



//Adding New Catefory and associat it with service
export async function createServiceCategory(serviceId: number, name:string): Promise<string> {
    try {     
    const toolId = await addCategoy(name); 
    const updatedService = await prisma.service.update({
        where: {
          id: serviceId,
        },
        data: {
          categories: {
            create: {
              category: { connect: { id: toolId } },
            },
          },
        },
        include: {
          categories: true,
        },
      });
      console.log('Tool updated successfully:', updatedService);
      const toolName = await prisma.category.findFirst({
        where: {
            id: toolId
        },
        select: {
            name: true
        }
    });
    let n:string = '';
    if(toolName){
        n = toolName.name; 
    }
    return n;      
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

//Creating  New Phase and associat it with service
export async function createServicePhase(data:FormData, id: number): Promise<string[]> {
  try {
    
    const result = PhaseSchema.safeParse(Object.fromEntries(data.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }
  const userId = session.user.id;

  if (result.success) {
    const dataPhase = result.data; 
    let imagePath = '';
    let iconPath = '';
    
    if(dataPhase.image && dataPhase.image.name){
      await fs.mkdir("public/services/phases/images", { recursive: true })
      imagePath = `/services/phases/images/${crypto.randomUUID()}-${dataPhase.image.name}`
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await dataPhase.image.arrayBuffer())
        )
      }

    if(dataPhase.icon && dataPhase.icon.name){
      await fs.mkdir("public/services/phases/icons", { recursive: true })
      iconPath = `/services/phases/icons/${crypto.randomUUID()}-${dataPhase.icon.name}`
      await fs.writeFile(
        `public${iconPath}`,
        Buffer.from(await dataPhase.icon.arrayBuffer())
        )
      }
      const phase = await prisma.phase.create({
        data: {
          serviceId : id,
        name: dataPhase.name,
        
        description: dataPhase.description,
        sequence: 9,
        userId: userId,
        
        
        image: imagePath,
        icon : iconPath
      },
    
    });
      }

    const services = await prisma.service.findFirst({
      where: {
          id: id
      },
      include: {
          phases: true
      }
  });
  let n:string[] = [];
  if(services){
    n = services.phases.map(phase => phase.name);
  }
  console.log("wedewd0----->"+services?.name);
 
  return n;    
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


//Adding New Work and associat it with service
export async function createServiceWork(serviceId: number, name:string): Promise<string> {
  try {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }
  const userId = session.user.id;
  const newWork = await prisma.work.create({
    data: {
      title : name,
      serviceId: serviceId,
      userId : userId
    },
  });
    const toolName = await prisma.work.findFirst({
      where: {
          id: newWork.id,
          serviceId : serviceId
      },
      select: {
          title: true
      }
  });
  let n:string = '';
  if(toolName){
      n = toolName.title;
      
  }
  return n;    
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

//Adding New Catefory and associat it with service
export async function createServiceTool(serviceId: number, name:string): Promise<string> {
    try {
        
    const toolId = await addTool(name); 
    const updatedService = await prisma.service.update({
        where: {
          id: serviceId,
        },
        data: {
          tools: {
            create: {
              tool: { connect: { id: toolId } },
            },
          },
        },
        include: {
          tools: true,
        },
      });
      console.log('Tool updated successfully:', updatedService);
    //   const toolIds: number[] = updatedService.tools.map(tool => tool.toolId);
      const toolName = await prisma.tool.findFirst({
        where: {
            id: toolId
        },
        select: {
            name: true
        }
    });
    let n:string = '';
    if(toolName){
        n = toolName.name;
        
    }
    return n;
   
    //   const names = await getToolsNamesByIds(toolIds); // Ensure this function is async if needed
      
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }