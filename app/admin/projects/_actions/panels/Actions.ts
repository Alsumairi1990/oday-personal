"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { ProjectWithModels } from "../../_utils/ProjectWithModels";
import { slugify } from "@/utils/TextUtils";
import { Task } from "@prisma/client";

// Remove Work Category  with return 'WorkWithModels' object
export async function removeProjectTask(projectId: string, name: string): Promise<ProjectWithModels> {
  try {
    const nameSlug = slugify(name);
    const task = await prisma.task.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!task) {
      throw new Error('task Not Exist');
    }
    const tasks = await prisma.task.update({
      where : {
        id : task.id
      },
      data : {
        projectId : ''
      }
    })
    const updatedProject = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
          categories: true,
          tools: true,
          user : true,
          team : true,
          tasks : true,
          Media : true
        },
    });
    return updatedProject as ProjectWithModels;
  } catch (error) {
    console.error('[removeProjectTasks]', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// get all tasks
export async function getTasks(): Promise<Task[]> {
  try {
    const updatedProject = await prisma.task.findMany({
    });
    return updatedProject;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
// Remove Work Category  with return 'WorkWithModels' object
export async function removeProjectTool(projectId: string, name: string): Promise<ProjectWithModels> {
  try {
    const nameSlug = slugify(name);
    const tool = await prisma.tool.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!tool) {
      throw new Error('Tool Not Exist');
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
          categories: true,
          tools: true,
          user : true,
          team : true,
          tasks : true,
          Media : true
        },
    });
    return updatedProject as ProjectWithModels;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Remove prokect Category  with return 'ProjectWithModels' object
export async function removeProjectCategory(projectId: string, name: string): Promise<ProjectWithModels> {
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
            categories: true,
            tools: true,
            user : true,
            team : true,
            tasks : true,
            Media : true
          },
      });
      return updatedProject as ProjectWithModels;
    } catch (error) {
      console.error('Error updating service with categories:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

// Adding Project tool
export async function addProjectTool(projectId: string, ids: number[]): Promise<ProjectWithModels> {
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
        categories: true,
        tools: true,
        user : true,
        team : true,
        tasks : true,
        Media : true
      }
    });

    return updatedProject as ProjectWithModels;
  } catch (error) {
    console.error('Error updating project with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
  


// Adding Project category
export async function addProjectCategory(projectId: string, ids: number[]): Promise<ProjectWithModels> {
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
          categories: true,
          tools: true,
          user : true,
          team : true,
          tasks : true,
          Media : true
        }
      });
      const categoryNames: string[] = updatedProject.categories.map(category => category.name);

      return updatedProject as ProjectWithModels;
    } catch (error) {
      console.error('Error updating service with tools:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }