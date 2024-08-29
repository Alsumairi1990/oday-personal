"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { BasicSchema } from "../_utils/BasicSchema";
import { slugify } from "@/utils/TextUtils";
import { Category, Project, Team, Tool } from "@prisma/client";
import { ProjectAnalyticsModel } from "../_utils/ProjectAanlyticsModel";
import { ProjectWithModels } from "../_utils/ProjectWithModels";
import { DetailsSchema } from "../_utils/Details.Schema";


// Editing  Project details info
export async function  editProjectDetails(data:FormData,id:string):Promise<Project | null>{
  try {
   const result = DetailsSchema.safeParse(Object.fromEntries(data.entries()))
   const session = await getServerSession(authOptions);
   if (!session) {
     throw new Error('User not authenticated');
   }
   const userId = session.user.id;
   
   if (result.success) {
    const data = result.data;
       const basic = await prisma.project.update({
        where : {
          id:id
        },
         data: {
           status : data.status,
           startDate : data.startDate,
           endDate : data.endDate,
           budget : data.budget,
         },
       });
       const project = await prisma.project.findUnique({
        where : {
          id:id
        }
       })
       return project!;
   }else {
      throw new Error ('Schema not converted ')
   }
  } catch (error) {
      console.log("[Creating project basic info ]" + error)
      throw error;
   }
 }


// get work data By ID
export async function getProjectWModelsById(projectId:string):Promise<ProjectWithModels >{
  try {
    const elements = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        categories: true,
        tools: true,
        phases : true,
        tasks : true,
        Media : true,
        user : true
      },
    });
    return elements as ProjectWithModels;
  } catch (error) {
    console.log("error in get work by id" + error);
    throw error;
  }
}

// get project data By ID
export async function getProjectById(projectId:string):Promise<Project>{
  try {
    const element = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
     
    });
    return element! ;
  } catch (error) {
    console.log("error in get work by id" + error);
    throw error;
  }
}

// get project with anayltics
export async function getProjectWithAnalytics():Promise<ProjectAnalyticsModel[]>{
  try {
    const elements = await prisma.project.findMany({
      select: {
        id: true, // Select the service ID
        name: true, // Select the service name
        createdAt : true,
        image : true,
        priority : true,
        icon : true,
        _count: {
          select: {
            tasks: true, // Include the count of prices for each service
            phases: true, // Include the count of phases for each service
          },
        },
      },
      orderBy: {
        createdAt: 'desc', // Order by the creation date in descending order
      },
    });
return elements  as ProjectAnalyticsModel[];
  } catch (error) {
    console.log("[getProjectWithAnalytics]"+ error);
    throw error;
    
  }
}




//get teams 
export async function getProjectTeamById(projectId: string): Promise<Team | null> {
  try {
    const team = await prisma.team.findFirst({
      where: {
        projects: {
          some: {
            id: projectId,
          },
        },
      },
    });

    return team;
  } catch (error) {
    console.error('Error fetching team by project ID:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


//  Adding Team to project
export async function addProjectTeam(projectId:string,id:number):Promise<Team>{
  try {     
    const existingAssociations = await prisma.team.findUnique({
      where: {
        id:id,
        projects: {
          some: {
            id: projectId,
          },
        },
      },
      select: {
        id: true,
      },
    });


if (existingAssociations) {
  throw new Error('All provided teams IDs are already associated with the project');
}
const projectExists = await prisma.project.findUnique({
  where: { id: projectId }
});
if (!projectExists) {
  throw new Error(`Project with ID ${projectId} does not exist.`);
}
const teamsExist = await prisma.team.findUnique({
  where: {
    id: id
  }
});
if (!teamsExist) {
  throw new Error(`One or more team  not exist.`);
}
const teams = await prisma.team.update({
  where: {
    id: id
  },
  data: {
      projects: {
          connect:{id : projectId},
        },
  },
  include: {
    projects: true
  }
});

  return  teams;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


//get teams 
export async function getTeams():Promise<Team[]>{
  try {     
    const elements= await prisma.team.findMany({
    
     });
  return  elements;      
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
//get all tools 
export async function getTools():Promise<Tool[]>{
    try {     
          const elements= await prisma.tool.findMany({
          
           });
       
        return  elements;      
        } catch (error) {
          console.error('Error updating service with tools:', error);
          throw error;
        } finally {
          await prisma.$disconnect();
        }

}

// Remove PRoject Tools 
export async function removeProjectTool(projectId: string, name: string): Promise<Category[]> {
  try {
    const nameSlug = slugify(name);
    const tool = await prisma.tool.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!tool) {
      throw new Error('tool Not Exist');
    }
    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        tools: {
          disconnect: { id: tool.id },
        },
      },
      include: {
        tools: true
      },
    });
    return updatedProject.tools;
  } catch (error) {
    console.error('[Get Project Tools]', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Remove Work Category  with return 'WorkWithModels' object
export async function removeProjectCategory(projectId: string, name: string): Promise<Category[]> {
    try {
      const nameSlug = slugify(name);
      const category = await prisma.category.findFirst({
        where: { name: name },
        select: { id: true }
      });
      if (!category) {
        throw new Error('Category Not Exist');
      }
      const updatedProject = await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          categories: {
            disconnect: { id: category.id },
          },
        },
        include: {
          categories: true
        },
      });
      return updatedProject.categories;
    } catch (error) {
      console.error('Error updating service with categories:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }


  // Creating New Category with 'name,slug' columns for shorway creation 
async function createTool(name: string, userId:string) : Promise<number> {
  // let caregory:number = 0;
  try {     
      const nameSlug = slugify(name);
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
  
  return newCategory.id;
      
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
  

  //Adding New tool and associat it with project
export async function createProjectTool(projectId: string, name:string): Promise<Category> {
  try {     
    const nameSlug = slugify(name);
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session.user.id;
    const existingCategory = await prisma.tool.findFirst({
      where: {
        slug: nameSlug,
      },
    });

    if (existingCategory) {
      throw new Error('Tool with this name already exists.');
    }


  const toolId = await createTool(name,userId); 
  
  const updatedProject = await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
          tools: {
              connect: { id: toolId } ,
            },
      },
      include: {
        tools: true
      }
    });
    const toolName = await prisma.tool.findUnique({
      where: {
          id: toolId
      },
  });
 
  return toolName!;      
  } catch (error) {
    console.error('Creating New tool abd add it to project', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
  
//Adding New Category and associat it with project
export async function createProjectCategory(projectId: string, name:string): Promise<Category> {
    try {     
    const toolId = await addCategoy(name); 
    const updatedProject = await prisma.project.update({
        where: {
          id: projectId
        },
        data: {
            categories: {
                connect: { id: toolId } ,
              },
        },
        include: {
          categories: true
        }
      });
  
      const toolName = await prisma.category.findUnique({
        where: {
            id: toolId
        },
      
    });
   
    return toolName!;      
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }



// Adding Project category
export async function addProjectTool(projectId: string, ids: number[]): Promise<Tool[]> {
  try {
      const existingAssociations = await prisma.tool.findMany({
          where: {
            id: {
              in: ids,
            },
            projects: {
              some: {
                id: projectId,
              },
            },
          },
          select: {
            id: true,
          },
        });
    const existingToolIds = existingAssociations.map(cat => cat.id);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const projectExists = await prisma.project.findUnique({
      where: { id: projectId }
    });
    if (!projectExists) {
      throw new Error(`Project with ID ${projectId} does not exist.`);
    }
    const toolsExist = await prisma.tool.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tool do not exist.`);
    }
    const updatedProject = await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
          tools: {
              connect: newIds.map(id => ({ id })),
            },
      },
      include: {
        tools: true
      }
    });
    const categoryNames: string[] = updatedProject.tools.map(tool => tool.name);

    return updatedProject.tools;
  } catch (error) {
    console.error('Error updating Project with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Adding Project category
export async function addProjectCategory(projectId: string, ids: number[]): Promise<Category[]> {
    try {
        const existingAssociations = await prisma.category.findMany({
            where: {
              id: {
                in: ids,
              },
              projects: {
                some: {
                  id: projectId,
                },
              },
            },
            select: {
              id: true,
            },
          });
      const existingToolIds = existingAssociations.map(cat => cat.id);
      const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));
  
      if (newIds.length === 0) {
        throw new Error('All provided tool IDs are already associated with the service');
      }
      const projectExists = await prisma.project.findUnique({
        where: { id: projectId }
      });
      if (!projectExists) {
        throw new Error(`Project with ID ${projectId} does not exist.`);
      }
      const toolsExist = await prisma.category.findMany({
        where: {
          id: { in: ids }
        }
      });
      if (toolsExist.length !== ids.length) {
        throw new Error(`One or more category do not exist.`);
      }
      const updatedProject = await prisma.project.update({
        where: {
          id: projectId
        },
        data: {
            categories: {
                connect: newIds.map(id => ({ id })),
              },
        },
        include: {
          categories: true
        }
      });
      const categoryNames: string[] = updatedProject.categories.map(category => category.name);

      return updatedProject.categories;
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
// Get Tools by project id 
export async function getProjectToolslById(projectId:string):Promise<Tool[] >{
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      tools: true
    },
  });
  let catgs:Tool[] = [];
  if(project?.tools) {
      catgs= project?.tools;
  }
  return catgs;
}


// Get Categories by project id 
export async function getProjectWCategorylById(projectId:string):Promise<Category[] >{
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        categories: true
      },
    });
    let catgs:Category[] = [];
    if(project?.categories) {
        catgs= project?.categories;
    }
    return catgs;
  }
  

// creating Project basic info
export async function  addBasic(data:FormData):Promise<string>{
    try {
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
         const basic = await prisma.project.create({
           data: {
             name : data.name,
             description : data.description,
             progress : data.progress,
             status : data.status,
             startDate : data.startDate,
             endDate : data.endDate,
             budget : data.budget,
             userId : userId,
             image : imagePath,
             icon : iconPath
           },
         });
         console.log("service id ---", basic.id);
         
         return basic.id;
      
     }else {
        throw new Error ('Schema not converted ')
     }
    } catch (error) {
        console.log("[Creating project basic info ]" + error)
        throw error;
     }
   }