"use server"
import prisma from "../../../../utils/prisma";
import { z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
// import { handler } from '@/pages/api/auth/[...nextauth]';
// import { handler } from '@/app/api/auth/[...nextauth]/route';
import { NextApiRequest, NextApiResponse } from 'next';



import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { slugify } from "@/utils/TextUtils";
import { Category } from "@prisma/client";


// const fileSchema = z.instanceof(File, { message: "Required" })
// const imageSchema = fileSchema.refine(
//   file => file.size === 0 || file.type.startsWith("image/")
// )

// const addSchema = z.object({
//   name: z.string().min(1),
//   description: z.string().min(1),
//   priceInCents: z.coerce.number().int().min(1),
//   file: fileSchema.refine(file => file.size > 0, "Required"),
//   image: imageSchema.refine(file => file.size > 0, "Required"),
// })
type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'image' | 'icon' | 'createdAt' | 'updatedAt'>;

const addSchema = z.object({
  category_name: z.string().min(3),
  description: z.string().min(1),
})

export async function addCategory(data:CategoryInput) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;
    console.log("server action"+ data?.name);
    const nameSlug = slugify(data.name);
    try {
      const newService = await prisma.category.create({
              data: {
              name: data.name,
              slug: nameSlug,
              description: data.description,
              userId: userId,
            },
            select: {
                name: true,
                description: true,
            },
      });
      console.log("server action", newService);
      
      return newService;
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Error creating service');
    }

    // export async function addCategory(prevState: unknown,dataForm:FormData) {
    //   console.log("called ");
    //   const session = await getServerSession(authOptions);
    //   if (!session) {
    //     throw new Error('User not authenticated');
    //   }
    //   const result = addSchema.safeParse(Object.fromEntries(dataForm.entries()))
    //   if (result.success === false) {
    //     return result.error.formErrors.fieldErrors
    //   }
    
    //   const data = result.data
    
    //   const userId = session.user.id;
    //   console.log(result);

    //     const nameSlug = slugify(data.category_name);
    //     try {
    //       const newService = await prisma.category.create({
    //         data: {
    //           name: data.category_name,
    //           slug: nameSlug,
    //           description: data.description,
    //           userId: userId,
    //         },
    //         select: {
    //             name: true,
    //             slug : true,
    //             description: true,
    //         },
    //       });
    //       console.log("server action", newService);
    //       return null;
    //     } catch (error) {
    //       console.error('Error creating service:', error);
    //       throw new Error('Error creating service');
    //     }
    









//   const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
//   if (result.success === false) {
//     return result.error.formErrors.fieldErrors
//   }

//   const data = result.data

//   await fs.mkdir("services", { recursive: true })
//   const filePath = `services/${crypto.randomUUID()}-${data.file.name}`
//   await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))

//   await fs.mkdir("public/services", { recursive: true })
//   const imagePath = `/services/${crypto.randomUUID()}-${data.image.name}`
//   await fs.writeFile(
//     `public${imagePath}`,
//     Buffer.from(await data.image.arrayBuffer())
//   )

}