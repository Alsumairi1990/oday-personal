"use server"

import { getServerSession } from "next-auth";
import prisma from "../../../../../utils/prisma";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import { BasicSchema } from "../_utils/BasicSchema";
import { slugify } from "@/utils/TextUtils";
import { Category, Media, Tag } from "@prisma/client";
import { addCategoy, createTag } from "../../common/_actions/Actions";
import AddTag from "../_components/AddTag";
import { ProductWithModels } from "../_utils/ProductWithModels";


// get all products with models 
export async function getProductWithModels(): Promise<ProductWithModels[]> {
  try {
    const services = await prisma.product.findMany({
      include: {
        categories: true,
        tags: true,
        prices: true,
        user : true,
        media : true
      },
    });
    return services as ProductWithModels[];
    
  } catch (error) {
    console.log("[getProductWithModels]" + error);
    throw error;
    
  }

}


// Get Work Images by ID 
export async function getProductImagesById(productId:string):Promise<Media[]>{
  try {
    const images = await prisma.media.findMany({
      where: { id: productId },
     
        });
      // let imageUrls:string[] = [];
      // if(images){
      // imageUrls = images?.imageUrls;
      // }
      return images;
      } catch (error) {
    console.log("[getProductImagesById]"+error);
    throw error;
      }
  }


// add product images 
export async function addProductMedia(data: FormData, productId: string): Promise<Media[]> {
  const imageUrls = data.getAll('imageUrls');
  // const altText:string = data.get('altText') as string;
  let imagePaths: string[] = [];
  if (imageUrls.length > 0) {
    for (const file of imageUrls) {
      const f: File | null = file as unknown as File;
      await fs.mkdir("public/products/images", { recursive: true });
      const imagePath = `/products/images/${crypto.randomUUID()}-${f.name}`;
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await f.arrayBuffer())
      );
      imagePaths.push(imagePath);
    }
  } else {
    throw new Error('No images');
  }
  try {
    if (imagePaths.length > 0) {
      const mediaPromises = imagePaths.map((imagePath) => {
        return prisma.media.create({
          data: {
            url: imagePath,
            productId: productId,
          },
        });
      });

      // Await all the media insertions
     const media:Media[] =  await Promise.all(mediaPromises);

      return media;
    } else {
      throw new Error('No images');
    }
  } catch (error) {
    console.error('Error adding media:', error);
    throw error;
  }
}


//Adding New Category and associat it with project
export async function createProductTag(projectId: string, name:string): Promise<Category> {
  try {     
  const tagId = await createTag(name); 
  const updatedProduct = await prisma.product.update({
      where: {
        id: projectId
      },
      data: {
          tags: {
              connect: { id: tagId } ,
            },
      },
      include: {
        tags: true
      }
    });

    const toolName = await prisma.tag.findUnique({
      where: {
          id: tagId
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


// Remove product tag
export async function removeProductTag(productId: string, name: string): Promise<Tag[]> {
  try {
    const nameSlug = slugify(name);
    const tag = await prisma.tag.findFirst({
      where: { name: name },
      select: { id: true }
    });
    if (!tag) {
      throw new Error('Tag Not Exist');
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        tags: {
          disconnect: { id: tag.id },
        },
      },
      include: {
        tags: true
      },
    });
    return updatedProduct.tags;
  } catch (error) {
    console.error('Error updating service with categories:', error);
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
export async function getProductWTaglById(productId:string):Promise<Tag[] >{
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        tags: true
      },
    });
    let catgs:Tag[] = [];
    if(product?.tags) {
        catgs= product?.tags;
    }
    return catgs;
    
  } catch (error) {
    console.log("[getProductWTaglById]"+error);
    throw error;
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
export async function addProductTag(productId: string, ids: number[]): Promise<Tag[]> {
  try {
      const existingAssociations = await prisma.tag.findMany({
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
      throw new Error('All provided tags IDs are already associated with the service');
    }
    const projectExists = await prisma.product.findUnique({
      where: { id: productId }
    });
    if (!projectExists) {
      throw new Error(`Product with ID ${productId} does not exist.`);
    }
    const toolsExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more tags do not exist.`);
    }
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId
      },
      data: {
          tags: {
              connect: newIds.map(id => ({ id })),
            },
      },
      include: {
        tags: true
      }
    });
    return updatedProduct.tags;
  } catch (error) {
    console.error('Error updating product with tags:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
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