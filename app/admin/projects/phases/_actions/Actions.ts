"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { PhaseSchema } from "@/app/admin/service/phases/utils/PhaseSchema";


// get project Phases' names
export async function getProjectWPhasesById(projectId:string):Promise<string[] >{
    try{
    const phases = await prisma.phase.findMany({
      where: {
        projectId: projectId,
      },
      select: {
         name : true
      }
      
    });
    const phaseNames: string[] = phases.map(assoc => assoc.name);
    return phaseNames;
    } catch (error) {
        console.error('[getServiceWPhasesById]', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
  }

  


// Removing project Phase
export async function removeProjectPhase(projectId: string, name: string): Promise<string[]> {
    try {
      // const nameSlug = slugify(name);
      const phase = await prisma.phase.findFirst({
        where: { name: name },
        select: { id: true }
      });
      if (!phase) {
        throw new Error('phase Not Exist');
      }
      const updatedWork = await prisma.phase.update({
        where: { id: phase.id }, // ID of the work you want to update
        data: { projectId: null },
      });
  
      const removed = await prisma.project.findUnique({
        where: { id: projectId },
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

  


//Creating  New Phase and associat it with project
export async function createProjectPhase(data:FormData, id: string): Promise<string[]> {
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
        await fs.mkdir("public/projects/phases/images", { recursive: true })
        imagePath = `/projects/phases/images/${crypto.randomUUID()}-${dataPhase.image.name}`
        await fs.writeFile(
          `public${imagePath}`,
          Buffer.from(await dataPhase.image.arrayBuffer())
          )
        }
  
      if(dataPhase.icon && dataPhase.icon.name){
        await fs.mkdir("public/projects/phases/icons", { recursive: true })
        iconPath = `/projects/phases/icons/${crypto.randomUUID()}-${dataPhase.icon.name}`
        await fs.writeFile(
          `public${iconPath}`,
          Buffer.from(await dataPhase.icon.arrayBuffer())
          )
        }
        const phase = await prisma.phase.create({
          data: {
          projectId : id,
          name: dataPhase.name,
          description: dataPhase.description,
          sequence: 9,
          userId: userId,
          image: imagePath,
          icon : iconPath
        },
      });
        }
      const services = await prisma.project.findFirst({
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
      console.error('Error updating project with phase:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  