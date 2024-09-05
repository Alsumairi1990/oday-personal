"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { BasicSchema } from "../_utils/BasicSchema";
import { slugify } from "@/utils/TextUtils";
import { Category } from "@prisma/client";
import { addCategoy } from "../../common/_actions/Actions";


//Adding New Category and associat it with project
export async function createProductCategory(projectId: string, name:string): Promise<Category> {
  try {     
  const categoryId = await addCategoy(name); 
  const updatedProduct = await prisma.product.update({
      where: {
        id: projectId
      },
      data: {
          categories: {
              connect: { id: categoryId } ,
            },
      },
      include: {
        categories: true
      }
    });

    const toolName = await prisma.category.findUnique({
      where: {
          id: categoryId
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

// Remove product category
export async function removeProductCategory(productId: string, name: string): Promise<Category[]> {
  try {
    const nameSlug = slugify(name);
    const category = await prisma.category.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!category) {
      throw new Error('Category Not Exist');
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
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
    return updatedProduct.categories;
  } catch (error) {
    console.error('Error updating service with categories:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



// Get Categories by product id 
export async function getProductWCategorylById(productId:string):Promise<Category[] >{
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        categories: true
      },
    });
    let catgs:Category[] = [];
    if(product?.categories) {
        catgs= product?.categories;
    }
    return catgs;
    
  } catch (error) {
    console.log("[getProductWCategorylById]"+error);
    throw error;
  }
  
}


// Adding product category
export async function addProductCategory(productId: string, ids: number[]): Promise<Category[]> {
  try {
      const existingAssociations = await prisma.category.findMany({
          where: {
            id: {
              in: ids,
            },
            products: {
              some: {
                id: productId,
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
    const projectExists = await prisma.product.findUnique({
      where: { id: productId }
    });
    if (!projectExists) {
      throw new Error(`Product with ID ${productId} does not exist.`);
    }
    const toolsExist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId
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
    return updatedProduct.categories;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// creating product basic info
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
       if(data.image && data.image.name){
         await fs.mkdir("public/products/images", { recursive: true })
         imagePath = `/products/images/${crypto.randomUUID()}-${data.image.name}`
         await fs.writeFile(
           `public${imagePath}`,
           Buffer.from(await data.image.arrayBuffer())
           )
         }
         let slug = slugify(data.name);

         const basic = await prisma.product.create({
           data: {
             name : data.name,
             slug : slug,
             description : data.description,
             isActive: data.isActive === 'yes' ? true : false,
             isPublished : data.isPublished === 'yes' ? true : false,
             rating : data.rating,
             stockQuantity : data.stockQuantity,
             userId : userId,
             image : imagePath,
             dimensions : data.dimensions
             
           },
         });         
         return basic.id;
      
     }else {
        throw new Error ('Schema not yconverted ')
     }
    } catch (error) {
        console.log("[Add Basic Product]" + error)
        throw error;
     }
   }