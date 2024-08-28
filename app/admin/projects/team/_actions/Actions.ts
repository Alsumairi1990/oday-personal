"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { TeamSchema } from "@/app/admin/employees-manage/teams/_utils/TeamSchema";
import { TeamWithModels } from "@/app/admin/employees-manage/teams/_utils/TeamWithModels";
import { Team } from "@prisma/client";
import { addProjectTeam } from "../../_actions/Actions";

// Create New Team for project id
export async function  createTeam(data:FormData,country:string,projectId:string):Promise<Team>{
    try {
      const result = TeamSchema.safeParse(Object.fromEntries(data.entries()))
      const session = await getServerSession(authOptions);
      if (!session) {
        throw new Error('User not authenticated');
      }
      const userId = session.user.id;
      if (result.success) {
        const data = result.data; 
        let iconPath = '';
        let imagePath = '';
        if(data.image && data.image.name){
            await fs.mkdir("public/employees/team/images", { recursive: true })
            iconPath = `/employees/team/images/${crypto.randomUUID()}-${data.image.name}`
            await fs.writeFile(
              `public${imagePath}`,
              Buffer.from(await data.image.arrayBuffer())
              )
            }
        if(data.icon && data.icon.name){
          await fs.mkdir("public/employees/team/images", { recursive: true })
          iconPath = `/employees/team/images/${crypto.randomUUID()}-${data.icon.name}`
          await fs.writeFile(
            `public${iconPath}`,
            Buffer.from(await data.icon.arrayBuffer())
            )
          }
          const locationData = await prisma.location.findFirst({
            where : {
              country : country
            }
          })     
          if(!locationData) {throw new Error('Location not exist')}
            const teamCreated = await prisma.team.create({
                    data: {
                    name: data.name,
                    status : data.status,
                    description : data.description,
                    icon : iconPath,
                    image : imagePath,
                    locationId : locationData.id
                },
                include : {
                    department : true,
                    employees: {
                      include: {
                        employee : true
                      },
                  }},
                  }); 
             if(!teamCreated) throw new Error('Team not created')
                const teamData:Team = await addProjectTeam(projectId,teamCreated.id);
            if (!teamData) throw new Error('team not added to project');
            // const results = await prisma.team.findUnique({
            //         where: {
            //           id : code.id
            //         },
            //         include : {
            //           department : true,
            //           employees: {
            //             include: {
            //               employee : true
            //             },
            //         }},
                    
            //       })         
         return teamData;
      }else {
        throw new Error("Data converion issue")
      }
    } catch (error) {
      console.log('Exception while Creating Team for project'+ error)
              throw error;
      }
      } 
