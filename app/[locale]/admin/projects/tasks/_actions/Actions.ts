"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { ProjectWTask } from "../../_utils/ProjectWTask";
import { TaskSchema } from "../_utils/TaskSchema";
import { Task } from "@prisma/client";


// Get project tasks
export async function getProjectTasks(projectId:string):Promise<Task[]>{
    try {     
           if(!projectId) throw new Error ("No Project id send");
            const tasks = await prisma.task.findMany({
                where : {
                    projectId : projectId
                }
            })
      return  tasks;      
    } catch (error) {
        console.error('Error updating service with tools:', error);
        throw error;
      } finally {
        await prisma.$disconnect();
      }
    }

// Creating Task and add it to project
export async function CreateTask(dataForm:FormData,projectId:string):Promise<Task[]>{
    try {     
        const result = TaskSchema.safeParse(Object.fromEntries(dataForm.entries()))
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error('User not authenticated');
        }
        const userId = session.user.id;
        if (!userId) throw new Error ("You must logged in ");
        if(!projectId) throw new Error ("project not passed ")
        if (result.success) {
          const data = result.data;
          let imagePath = '';
          let iconPath = '';
          console.log("image data : "+ data.image.name);
          if(data.image && data.image.name){
           console.log("inside omage");
            await fs.mkdir("public/project/tasks/images", { recursive: true })
            imagePath = `/project/tasks/images${crypto.randomUUID()}-${data.image.name}`
            await fs.writeFile(
              `public${imagePath}`,
              Buffer.from(await data.image.arrayBuffer())
              )
            }
    
          if(data.icon && data.icon.name){
          console.log("inside icon");
            await fs.mkdir("public/project/tasks/icons", { recursive: true })
            iconPath = `/project/tasks/icons/${crypto.randomUUID()}-${data.icon.name}`
            await fs.writeFile(
              `public${iconPath}`,
              Buffer.from(await data.icon.arrayBuffer())
              )
            }
            const basic = await prisma.task.create({
              data: {
                name : data.name,
                description : data.description,
                progress : data.progress,
                status : data.status,
                startDate : data.startDate,
                endDate : data.endDate,
                dueDate : data.dueDate,
                completedAt : data.completedAt,
                estimatedHours : data.estimatedHours,
                actualHours : data.actualHours,
                priority : data.priority,
                image : imagePath,
                icon : iconPath,
                projectId : projectId
              },
            });
            const tasks = await prisma.task.findMany({
                where : {
                    projectId : projectId
                }
            })
            
      return  tasks;      
      } else{
        throw new Error ("Form Data not converted ")
      }
    } catch (error) {
        console.error('Error updating service with tools:', error);
        throw error;
      } finally {
        await prisma.$disconnect();
      }
}