"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import { BasicSchema } from "../utils/BasicSchema";

import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { getCategoryNamesByIds } from "../../service/_serviceActions/ServiceActions";
import { MediaSchema } from "../utils/MediaSchema";
import fs from "fs/promises"
import { NextApiRequest, NextApiResponse } from "next";
import { getToolsNamesByIds } from "../../common/_actions/Actions";
import { WorkWithModels } from "../utils/WorkWithModels";


// Remove Location  from work
export async function removeWorkLocation(id:number, locationId:number):Promise<WorkWithModels>{
      try{
       const result = await prisma.work.update({
        where: {
          id: id,
          serviceId: locationId
        },
        data :{
          locationId : null
        }
      }); 

      const results = await prisma.work.findUnique({
        where: { id: id },
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
          location : true,
          user : true
        },
      });

      return results as WorkWithModels;
    } catch (error) {
      console.error('Error updating service with categories:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
}

// Adding Location to work by pass 'id' 'location'
export async function addWorkLocation(id:number , locationId:number):Promise<WorkWithModels>{
  try{
      const location = await prisma.location.findUnique({
        where : {
          id : locationId
        }
      })
      if (!location){throw new Error ("Location  not exist ")}
      const results = await prisma.work.update({
        where: {
          id: id
        },
        data: {
          locationId : locationId
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
          location : true,
          user : true
        },
      
      });
      return results as WorkWithModels;
    } catch (error) {
      console.error('Error updating service with categories:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
}



// Remove Work tag with return 'WorkWithModels' object
export async function removeWorkTag(workId: number, name: string): Promise<WorkWithModels> {
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
        location : true,
        user : true
      },
    });
    return removed as WorkWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Remove Work tool  with return 'WorkWithModels' object
export async function removeWorkTool(workId: number, name: string): Promise<WorkWithModels> {
  try {
    const nameSlug = slugify(name);
    const tool = await prisma.tool.findFirst({
      where: { name: name },
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
        location : true,
        user : true
      },
    });
    return removed as WorkWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Remove Work Category  with return 'WorkWithModels' object
export async function removeWorkCategory(workId: number, name: string): Promise<WorkWithModels> {
  try {
    const nameSlug = slugify(name);
    const category = await prisma.category.findFirst({
      where: { name: name },
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
        location : true,
        user : true
      },
    });
    return removed as WorkWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding tag to Work
export async function addWorkTags(id:number , ids:number[]):Promise<WorkWithModels>{
  try {
    const existingCats = await prisma.workTag.findMany({
      where: {
        workId: id
      },
      select: {
        tagId: true
      }
    });
    const existingIds = existingCats.map(elm => elm.tagId);
    const newIds = ids.filter(catlId => !existingIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tags IDs are already associated with the work');
    }
    const worlExists = await prisma.work.findUnique({
      where: { id: id }
    });
    if (!worlExists) {
      throw new Error(`Work with ID ${id} does not exist.`);
    }
   
    const categoryExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (categoryExist.length !== ids.length) {
      throw new Error(`One or more tag do not exist.`);
    }
    const updatedWork = await prisma.work.update({
      where: {
        id: id
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
        location : true,
        user : true
      },
    });
    return updatedWork as WorkWithModels;
  } catch (error) {
    console.error('Exception in adding category to work based on id :', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Adding Tool to Work
export async function addWorkTools(id:number , ids:number[]):Promise<WorkWithModels>{
  try {
    const existingCats = await prisma.workTool.findMany({
      where: {
        workId: id
      },
      select: {
        toolId: true
      }
    });
    const existingIds = existingCats.map(elm => elm.toolId);
    const newIds = ids.filter(catlId => !existingIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tools IDs are already associated with the work');
    }
    const worlExists = await prisma.work.findUnique({
      where: { id: id }
    });
    if (!worlExists) {
      throw new Error(`Worj with ID ${id} does not exist.`);
    }
   
    const elmExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    console.log(ids.length);
    console.log(elmExist.length);
 
    if (elmExist.length !== ids.length) {
      throw new Error(`One or more tools do not exist.`);
    }
    const updatedWork = await prisma.work.update({
      where: {
        id: id
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
        location : true,
        user : true
      },
    });
    return updatedWork as WorkWithModels;
  } catch (error) {
    console.error('Exception in adding category to work based on id :', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Adding Category to Work
export async function addWorkCategories(id:number , ids:number[]):Promise<WorkWithModels>{
  try {
    console.log("----------------"+ids.length)
    const existingCats = await prisma.workCategory.findMany({
      where: {
        workId: id
      },
      select: {
        categoryId: true
      }
    });
    const existingIds = existingCats.map(cat => cat.categoryId);
    const newIds = ids.filter(catlId => !existingIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided categories IDs are already associated with the worl');
    }
    const worlExists = await prisma.work.findUnique({
      where: { id: id }
    });
    if (!worlExists) {
      throw new Error(`Service with ID ${id} does not exist.`);
    }
   
    const categoryExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    console.log(ids.length + "---")

    console.log(categoryExist.length)
    if (categoryExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedWork = await prisma.work.update({
      where: {
        id: id
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
        location : true,
        user : true
      },
    });
    return updatedWork as WorkWithModels;
  } catch (error) {
    console.error('Exception in adding category to work based on id :', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// creating work basic info
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
       let imagePath = '';
       let iconPath = '';
       console.log("image data : "+ data.image.name);
       if(data.image && data.image.name){
        console.log("inside omage");
         await fs.mkdir("public/works/images", { recursive: true })
         imagePath = `/works/images/${crypto.randomUUID()}-${data.image.name}`
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
 
       if(data.icon && data.icon.name){
       console.log("inside icon");
         await fs.mkdir("public/works/icons", { recursive: true })
         iconPath = `/works/icons/${crypto.randomUUID()}-${data.icon.name}`
         await fs.writeFile(
           `public${iconPath}`,
           Buffer.from(await data.icon.arrayBuffer())
           )
         }
 
       
       try {
         const basic = await prisma.work.create({
           data: {
             title : data.title,
             description : data.description,
             highlights : data.highlights,
             client : data.client,
             userId : userId,
             image : imagePath,
             icon : iconPath
            //  additionalImages : imagePaths
           },
         });
         console.log("service id ---", basic.id);
         const workId = basic.id;
         return workId;
       } catch (error) {
         throw new Error('Error creating basic info ');
       }
     }
     return 0;
   }

// Adding Work tool
export async function addWorkTool(workId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.workTool.findMany({
      where: {
        workId: workId
      },
      select: {
        toolId: true
      }
    });
    const existingToolIds = existingCats.map(tag => tag.toolId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const workExists = await prisma.work.findUnique({
      where: { id: workId }
    });
    if (!workExists) {
      throw new Error(`Service with ID ${workId} does not exist.`);
    }
    const toolsExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.work.update({
      where: {
        id: workId
      },
      data: {
        tools: {
          create: newIds.map(tagId => ({
            tool: { connect: { id: tagId } }
          }))
        }
      },
      include: {
        tools: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const catIds: number[] = updatedService.tools.map(tool => tool.toolId);
    const names = await getToolsNamesByIds(catIds); // Ensure this function is async if needed
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Adding Work tag
export async function addWorkTag(workId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.workTag.findMany({
      where: {
        workId: workId
      },
      select: {
        tagId: true
      }
    });
    const existingToolIds = existingCats.map(tag => tag.tagId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const workExists = await prisma.work.findUnique({
      where: { id: workId }
    });
    if (!workExists) {
      throw new Error(`Service with ID ${workId} does not exist.`);
    }
    const toolsExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.work.update({
      where: {
        id: workId
      },
      data: {
        tags: {
          create: newIds.map(tagId => ({
            tag: { connect: { id: tagId } }
          }))
        }
      },
      include: {
        tags: true
      }
    });
    console.log('Tool updated successfully:', updatedService);
    const catIds: number[] = updatedService.tags.map(tag => tag.tagId);
    const names = await getCategoryNamesByIds(catIds); // Ensure this function is async if needed
    return names;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Work category
export async function addWorkCategory(workId: number, ids: number[]): Promise<string[]> {
  try {
    const existingCats = await prisma.workCategory.findMany({
      where: {
        workId: workId
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
    const workExists = await prisma.work.findUnique({
      where: { id: workId }
    });
    if (!workExists) {
      throw new Error(`Service with ID ${workId} does not exist.`);
    }
    const toolsExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedService = await prisma.work.update({
      where: {
        id: workId
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


export async function addMed(data:FormData,workId:number):Promise<number>{
  
  const imageUrls = data.getAll('imageUrls');
 
  let imagePaths:string[] = [];
    if(imageUrls.length>0){
      for (const file of imageUrls) {
        const f:File | null = file as unknown as File;
        await fs.mkdir("public/works/images", { recursive: true })
        const imagePath = `/works/images/${crypto.randomUUID()}-${f.name}`;
        console.log("image path"+imagePath);
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await f.arrayBuffer())
          )
          imagePaths.push(imagePath);
          console.log(imagePaths);
      }
    } else {
      throw new Error('No images ')
    }
    try {
      if(imagePaths.length >0 ){
      const updatedWork = await prisma.work.update({
        where: { id : workId},
        data: {
          imageUrls: imagePaths,
        },
      });
        return updatedWork.imageUrls.length;
      }else {
        throw new Error('no images')
      }

    } catch (error) {
      console.error('Error creating service:', error);
      throw error;
    }
    
}


// Get Work Images by ID 
export async function getWorkImagesById(workId:number):Promise<string[]>{
  const images = await prisma.work.findFirst({
          where: { id: workId },
          select:{
            imageUrls : true
          }
          });
      let imageUrls:string[] = [];
if(images){
  imageUrls = images?.imageUrls;
}
return imageUrls;
}




//Adding Work Media
export async function addingWorkMedia(data:FormData,workId:number):Promise<number>{
  const session = await getServerSession(authOptions);
  const result = MediaSchema.safeParse(Object.fromEntries(data.entries()))
  console.log("Starting");
  console.log(JSON.stringify(data, null, 2));

  if (!session) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;
  if (result.success) {
    console.log("inside success" + result.data.imageUrls.length);

    
    const data = result.data; 
    let imagePaths:string[] = [];
    let iconPath = '';
    
    if(data.imageUrls){
      const fileArray = Array.from(data.imageUrls);
      for (const file of fileArray) {
        await fs.mkdir("public/works/images", { recursive: true })
        const imagePath = `/works/images/${crypto.randomUUID()}-${file}`;
        console.log("image path"+imagePath);
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await file.arrayBuffer())
          )
          imagePaths.push(imagePath);
      }
      
     
      }

      // if(data.additionalImages && data.additionalImages.name){
      //   await fs.mkdir("public/categories/icons", { recursive: true })
      //   iconPath = `/categories/icons/${crypto.randomUUID()}-${data.additionalImages.name}`
      //   await fs.writeFile(
      //     `public${iconPath}`,
      //     Buffer.from(await data.additionalImages.arrayBuffer())
      //     )
      //   }

        // console.log("icon path"+iconPath);
            try {
              if(imagePaths.length >0 ){
              const updatedWork = await prisma.work.update({
                where: { id : workId},
                data: {
                  imageUrls: imagePaths,
                },
              });
                return updatedWork.imageUrls.length;
              }
            } catch (error) {
              console.error('Error creating service:', error);
              throw new Error('Error creating service');
            }

  }
  return 0;
}

// Get work by id with related tools
export async function getWorkWToolsById(workId:number):Promise<string[] >{
  const work = await prisma.work.findUnique({
    where: {
      id: workId,
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
  const associatedTools = work?.tools || [];
  const toolNames: string[] = associatedTools.map(assoc => assoc.tool.name);
  return toolNames;
}



// Get work by id with related tags
export async function getWorkWTagsById(workId:number):Promise<string[] >{
  const work = await prisma.work.findUnique({
    where: {
      id: workId,
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
  const associatedTools = work?.tags || [];
  const toolNames: string[] = associatedTools.map(assoc => assoc.tag.name);
  return toolNames;
}


// Get serivce by id with related catefories
export async function getWorkWCategorylById(workId:number):Promise<string[] >{
  const work = await prisma.work.findUnique({
    where: {
      id: workId,
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
  const associatedTools = work?.categories || [];
  const toolNames: string[] = associatedTools.map(assocTool => assocTool.category.name);
  return toolNames;
}


// Editing Work Icon 
export async function editWorkDescription(id:number,description:string):Promise<WorkWithModels>{
  try {
 
       const updated = await prisma.work.update({
         where : {
           id : id
         },
         data : {
           description : description
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
           location : true,
           user : true
         },
   
       })
   return updated as WorkWithModels;
  } catch (error) {
   console.log("Exception in edit work icon method"+error);
   throw error;
  }
 }

// Editing Work Icon 
export async function editWorkImage(id:number,formData:FormData):Promise<WorkWithModels>{
  try {
   const iconFile = formData.get('image') as File;
   let imagePath:string = ''; 
   if(iconFile && iconFile.name){
     await fs.mkdir("public/works/images", { recursive: true })
     imagePath = `/works/images/${crypto.randomUUID()}-${iconFile.name}`;
     console.log("image path"+imagePath);
     await fs.writeFile(
       `public${imagePath}`,
       Buffer.from(await iconFile.arrayBuffer())
       )
       const updated = await prisma.work.update({
         where : {
           id : id
         },
         data : {
           icon : imagePath
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
           location : true,
           user : true
         },
   
       })
   return updated as WorkWithModels;
   } else {
     throw new Error("No Icon submitted ")
   }
  } catch (error) {
   console.log("Exception in edit work icon method"+error);
   throw error;
  }
 }



// Editing Work Icon 
export async function editWorkIcon(id:number,formData:FormData):Promise<WorkWithModels>{
   try {
    const iconFile = formData.get('icon') as File;
    let iconPath:string = ''; 
    if(iconFile && iconFile.name){
      await fs.mkdir("public/works/icons", { recursive: true })
      iconPath = `/works/icons/${crypto.randomUUID()}-${iconFile.name}`;
      console.log("image path"+iconPath);
      await fs.writeFile(
        `public${iconPath}`,
        Buffer.from(await iconFile.arrayBuffer())
        )
        const updated = await prisma.work.update({
          where : {
            id : id
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
            location : true,
            user : true
          },
    
        })
    return updated as WorkWithModels;
    } else {
      throw new Error("No Icon submitted ")
    }
   } catch (error) {
    console.log("Exception in edit work icon method"+error);
    throw error;
   }
  }

// Edit basic Data 
export async function editWorkBasicData(id:number, data:FormData):Promise<WorkWithModels>{
    try {
      const title:string= data.get('title') as string;
      const name:string= data.get('highlights') as string;
      const client:string = data.get('client') as string;
      const result = await prisma.work.update({
        where : {
          id :id
        },
        data :{
          title : title,
          highlights : name,
          client : client
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
          location : true,
          user : true
        },
        
      })
      return result as WorkWithModels;
    } catch (error) {
      console.log("exception in editWorkBasicData " + error);
      throw error;
      
    }
}


// get work data By ID
export async function getWorkWModelsById(workId:number):Promise<WorkWithModels >{
  try {
    const work = await prisma.work.findUnique({
      where: {
        id: workId,
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
        location : true,
        user : true
      },
    });
    return work as WorkWithModels;
  } catch (error) {
    console.log("error in get work by id" + error);
    throw error;
  }
}

// Get All Works with all models 
export async function getWorkWithModels():Promise<WorkWithModels[]>{
  try {
    const works = await prisma.work.findMany({
    })
    return works as WorkWithModels[];
    
  } catch (error) {
    console.log("error on get work with models" + error);
    throw error;
  }
  
}