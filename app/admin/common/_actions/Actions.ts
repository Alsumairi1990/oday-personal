"use server"
import { Category, Tag } from "@prisma/client";
import prisma from "../../../../utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds, getTagsNamesByIds, getToolsNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";

//Get All Tags
export async function getTags(): Promise<Tag[]> {
  const tags = await prisma.tag.findMany({
  });
  return tags;
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
    const names = await getToolsNamesByIds(elementIds);
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
async function addCategoy(name: string) : Promise<number> {
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
            taf: { connect: { id: elemId } },
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