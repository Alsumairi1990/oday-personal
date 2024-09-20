"use server"
import prisma from "../../../../../../utils/prisma";
import { number, z } from "zod"
import fs from "fs/promises"
import { Category, Testimonial } from "@prisma/client";
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";


import { User } from "@prisma/client";
import { EmployeeWithModels } from "../_utils/EmployeeWithModels";
import { BasicInfoSchema } from "../_utils/BasicInfoScheam";

// Edit Employee basic info 
export async function EditProfilBasicInfo(id:string , formData:FormData):Promise<EmployeeWithModels>{
    const result = BasicInfoSchema.safeParse(Object.fromEntries(formData.entries()))
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }
  if (result.success) {
    const data = result.data; 
    const results = await prisma.employeeProfile.findUnique({
        where : {
            userId : id
        }
    })
    if(results){
        const element = await prisma.employeeProfile.update({
            where : {
                id : results.id
            },
            data : {
                firstName : data.first_name,
                lastName : data.last_name,
                sex : data.sex,
                maritalStatus : data.maritalStatus,
                dateOfBirth : data.dateOfBirth,
                bio : data.bio
            },
        })

    }else {
        const element = await prisma.employeeProfile.create({
            data : {
                firstName : data.first_name,
                lastName : data.last_name,
                sex : data.sex,
                maritalStatus : data.maritalStatus,
                dateOfBirth : data.dateOfBirth,
                userId : id,
                bio : data.bio
            },
        })
    }
    const elemen = getUsersWithModels(id);
    return elemen as unknown as EmployeeWithModels
  }
  throw new Error("form data no converted suucessfully ")
}

// Editing Employee Profile Iamge  
// export async function editWorkImage(id:number,formData:FormData):Promise<WorkWithModels>{
//     try {
//      const iconFile = formData.get('image') as File;
//      let imagePath:string = ''; 
//      if(iconFile && iconFile.name){
//        await fs.mkdir("public/works/images", { recursive: true })
//        imagePath = `/works/images/${crypto.randomUUID()}-${iconFile.name}`;
//        console.log("image path"+imagePath);
//        await fs.writeFile(
//          `public${imagePath}`,
//          Buffer.from(await iconFile.arrayBuffer())
//          )
//          const updated = await prisma.work.update({
//            where : {
//              id : id
//            },
//            data : {
//              icon : imagePath
//            },
//            include: {
//              categories: {
//                include: {
//                  category: true,
//                },
//              },
//              tags: {
//                include: {
//                  tag: true,
//                },
//              },
//              tools: {
//                include: {
//                  tool: true,
//                },
//              },
//              location : true,
//              user : true
//            },
     
//          })
//      return updated as WorkWithModels;
//      } else {
//        throw new Error("No Icon submitted ")
//      }
//     } catch (error) {
//      console.log("Exception in edit work icon method"+error);
//      throw error;
//     }
//    }


// Get Emloyee by 'id' with 'EmployeeWithModels' return object
export async function getAllUsersWithModels(): Promise<EmployeeWithModels[]> {
    try {
        const result = await prisma.user.findMany({
            include: {
                employeeProfile: {
                    include: {
                        socialNetwork: true, // Include the SocialNetwork associated with EmployeeProfile
                        teams: true,
                    },
                },
                roles: {
                    include: {
                        permissions: true, // Directly include permissions
                    },
                },
            },
        });
   console.log("result"+result);
        return result as unknown as  EmployeeWithModels[]; // Cast result to UserWithModels[]
    } catch (error) {
        console.log("error", error); // Log the error for debugging
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Get Emloyee by 'id' with 'EmployeeWithModels' return object
export async function getUsersWithModels(id:string): Promise<EmployeeWithModels> {
    try {
        const result = await prisma.user.findUnique({
            where : {
                id : id
            },
            include: {
                employeeProfile: {
                    include: {
                        socialNetwork: true, // Include the SocialNetwork associated with EmployeeProfile
                        teams: true,
                    },
                },
                roles: {
                    include: {
                        permissions: true, // Directly include permissions
                    },
                },
            },
        });
   console.log("result"+result);
        return result as unknown as  EmployeeWithModels; // Cast result to UserWithModels[]
    } catch (error) {
        console.log("error", error); // Log the error for debugging
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}


// get all user 
export async function getUsers():Promise<User[]>{
    try {
        const result = await prisma.user.findMany({
        })
        return result as User[];
    } catch (error) {
        console.log("error");
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}