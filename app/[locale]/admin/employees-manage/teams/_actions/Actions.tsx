"use server"
import { z } from "zod"
import fs from "fs/promises"
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import prisma from "../../../../../../utils/prisma";
import { TeamWithModels } from "../_utils/TeamWithModels";
import { TeamSchema } from "../_utils/TeamSchema";


//Delete Meny Element Parent by 'ids'
// export async function deleteMenuElement(ids:string[]): Promise<MenuWithModels[]> {
//     try {
//       const numberIds = ids.map(id => Number(id));
//       console.log("before deleted "+numberIds.length)
//         const result = await prisma.adminMenu.deleteMany({
//           where: {
//             id: {
//               in: numberIds
//             }
//           }
//         });
//         console.log("deleted"+result)
//         const results = await prisma.adminMenu.findMany({
//             include : {
//                 elements : true
//               }
//         });
//     return results as MenuWithModels[];
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }

// Create and add Inner Element to parent element
// export async function  addingInnerElement(id:number,data:FormData):Promise<MenuWithModels>{
//     try {
//       const result = MenuElementSchema.safeParse(Object.fromEntries(data.entries()))
//       const session = await getServerSession(authOptions);
//       if (!session) {
//         throw new Error('User not authenticated');
//       }
      
    
//       if (result.success) {
//         const data = result.data; 
//         let iconPath = '';
//         if(data.icon && data.icon.name){
//           await fs.mkdir("public/codes/images", { recursive: true })
//           iconPath = `/codes/images/${crypto.randomUUID()}-${data.icon.name}`
//           await fs.writeFile(
//             `public${iconPath}`,
//             Buffer.from(await data.icon.arrayBuffer())
//             )
//           }
//             const elem = await prisma.adminMenu.findUnique({
//                 where : {
//                     id : id
//                 }
//             });
//             const inner = await prisma.element.create({
//                 data : {
//                     title: data.title,
//                     link : data.link,
//                     menuId : id,
//                     icon : iconPath
//                 }
//             });
//             if(!elem){throw new Error("Element Not Exist")}
            
//                 const results = await prisma.adminMenu.findUnique({
//                     where: {
//                       id : id
//                     },
//                     include : {
//                       elements : true
//                     }
//                   })         
//          return results as MenuWithModels;
//       }else {
//         throw new Error("Data converion on suucced")
//       }
//     } catch (error) {
//       console.log('Exception while Creating Meny Element'+ error)
//               throw error;
//       }
//       } 


// Get Team Members by team id
export async function getTeamMemebersById(teamId:number):Promise<TeamWithModels>{
  try {
    const elements = await prisma.team.findUnique({
      where : {
        id : teamId
      },
      include : {
        department : true,
        employees: {
          include: {
            employee : true
          },
      }},
     
    })
    return elements as unknown as TeamWithModels;
  } catch (error) {
    console.log('Exception while getting team member' + error)
    throw error;
  }finally {
    await prisma.$disconnect();
  }
}


// Adding Team Member 
export async function addTeamMember(teamId: number, ids: number[]): Promise<TeamWithModels> {
  try {
    const existingCats = await prisma.teamEmployee.findMany({
      where: {
        teamId: teamId
      },
      select: {
        employeeId: true
      }
    });
    const existingToolIds = existingCats.map(cat => cat.employeeId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided MEmebr IDs are already associated with the service');
    }
    const workExists = await prisma.team.findUnique({
      where: { id: teamId }
    });
    if (!workExists) {
      throw new Error(`Team with ID ${teamId} does not exist.`);
    }
    const toolsExist = await prisma.employeeProfile.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more employee profile do not exist.`);
    }
    const results = await prisma.team.update({
      where: {
        id: teamId
      },
      data: {
        employees: {
          create: newIds.map(catId => ({
            employee: { connect: { id: catId } }
          }))
        }
      },
      include : {
        department : true,
        employees: {
          include: {
            employee : true,
          },
      }},
    });
    console.log(results);
    return results as unknown as TeamWithModels;
  } catch (error) {
    console.error('Error updating team  with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}




// Creating New Menu Element 
export async function  createTeam(data:FormData,country:string):Promise<TeamWithModels>{
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
        // if(data.image && data.image.name){
        //     await fs.mkdir("public/employees/team/images", { recursive: true })
        //     iconPath = `/employees/team/images/${crypto.randomUUID()}-${data.image.name}`
        //     await fs.writeFile(
        //       `public${imagePath}`,
        //       Buffer.from(await data.image.arrayBuffer())
        //       )
        //     }
        // if(data.icon && data.icon.name){
        //   await fs.mkdir("public/employees/team/images", { recursive: true })
        //   iconPath = `/employees/team/images/${crypto.randomUUID()}-${data.icon.name}`
        //   await fs.writeFile(
        //     `public${iconPath}`,
        //     Buffer.from(await data.icon.arrayBuffer())
        //     )
        //   }
          const locationData = await prisma.location.findFirst({
            where : {
              country : country
            }
          })     
          if(!locationData) {throw new Error('Location not exist')}
            const code = await prisma.team.create({
                    data: {
                    name: data.name,
                    nameAr : "",
                    status : data.status,
                    description : data.description,
                    icon : iconPath,
                    image : imagePath,
                    locationId : locationData.id
                },
                    
                  }); 
             
            const results = await prisma.team.findUnique({
                    where: {
                      id : code.id
                    },
                    include : {
                      department : true,
                      employees: {
                        include: {
                          employee : true
                        },
                    }},
                    
                  })         
         return results as unknown as TeamWithModels;
      }else {
        throw new Error("Data converion on suucced")
      }
    } catch (error) {
      console.log('Exception while Creating Meny Element'+ error)
              throw error;
      }
      } 

      
// get Inner Element of passed menu element 
export async function getTeamsWModelsById(id:number):Promise<TeamWithModels>{
    try {
       const elements = await prisma.team.findUnique({
        where : {
            id : id
        },
        include : {
            department : true,
            employees: {
              include: {
                employee : true
              },
          }},
       })
    return elements as unknown as TeamWithModels;
        
    } catch (error) {
        console.log("error while getting Menu Element " + error);
        throw error;
        
    } finally{

    }
}


//Delete Team  by 'ids'
export async function deleteTeamById(ids:string[]): Promise<TeamWithModels[]> {
  try {
    const numberIds = ids.map(id => Number(id));
      const result = await prisma.team.deleteMany({
        where: {
          id: {
            in: numberIds
          }
        }
      });
      const results = await prisma.team.findMany({
        include : {
            department : true,
            employees: {
              include: {
                employee : true
              },
          }},
    });
  return results as TeamWithModels[];
  } catch (error) {
    console.log("Exception while fetting Teams"+error);
    throw error;
  }
}

// get All Teams with models 
export async function getTeamWithModels():Promise<TeamWithModels[]>{
    const results = await prisma.team.findMany({
        include : {
            department : true,
            employees: {
              include: {
                employee : true
              },
          }},
    });
    return results as unknown as TeamWithModels[];
    
}