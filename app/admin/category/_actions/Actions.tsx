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
import { categoryParam } from "../util/CategoryParam";
import { File } from "buffer";
import { inputType } from "../util/InptParam";



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
  image: z.custom<File>((file) => {    
    return true;
  }, {
    message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
  }),
  icon: z.custom<File>((file) => {    
    return true;
  }, {
    message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
  }),
})

export async function getCatByName(name:string): Promise<Category | null> {
  const category = await prisma.category.findFirst({
    where: {
      name: name,
    },
  });
  return category;
}
export async function edtCategory(dataForm:FormData): Promise<string | null > {
  const result = addSchema.safeParse(Object.fromEntries(dataForm.entries()))
  if (result.success) {
    const data1 = result.data; 
    console.log("------------00000000000"+data1.icon.name);
    await fs.mkdir("public/categories", { recursive: true })
    console.log("----------->>>"+data1.image);
    const imagePath = `/categories/${crypto.randomUUID()}-${data1.image.name}`
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data1.image.arrayBuffer())
    )
  } else {
    console.error('Error parsing data:', result.error);
  }
  return null;

}
export async function editCategory(data:FormData): Promise<string | null > {
  console.log("0-0-0-0-0-0-0-0-0-0-0");
  const result = addSchema.safeParse(Object.fromEntries(data.entries()))
  if (result.success) {
    const data1 = result.data; 
    console.log("------------00000000000"+data1.icon.name);
  }
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   throw new Error('User not authenticated');
  // }
 

  // await fs.mkdir("public/categories", { recursive: true })
  // console.log("----------->>>"+data.image);
  // const imagePath = `/categories/${crypto.randomUUID()}-${data.image[0].name}`
  // await fs.writeFile(
  //   `public${imagePath}`,
  //   Buffer.from(await data.image[0].arrayBuffer())
  // )

  // const userId = session.user.id;
  //   console.log("server action"+ data.category_name);
  //   const nameSlug = slugify(data.category_name);
  //   const category = await prisma.category.findFirst({
  //     where: { slug: nameSlug },
  //   });
  //  if (category){
  //   try {
  //     const updatedCategory = await prisma.category.update({
  //       where: { id : category.id},
  //       data: {
  //         name: data.category_name,
  //         description: data.description,
  //         image: imagePath,
  //       },
  //     });
  //     console.log("server action", updatedCategory);
    
  //     return updatedCategory.name;

  //   } catch (error) {
  //     console.error('Error creating service:', error);
  //     throw new Error('Error creating service');
  //   }
  // }
  return null;
}



export async function getCategoriesNames(): Promise<string[]> {
  const categories = await prisma.category.findMany({
    select: {
      name: true,
    },
  });
  return categories.map(category => category.name);
}

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