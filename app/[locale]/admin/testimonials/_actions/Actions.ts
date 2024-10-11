"use server"
import prisma from "../../../../../utils/prisma";
import { number, z } from "zod"
import fs from "fs/promises"
import { Category, Testimonial } from "@prisma/client";
import { TestimonialSchema } from "../_util/TestimonialSchema";
import { getServerSession } from 'next-auth/next';
import authOptions from "@/utils/AuthOptions";
import { TestimonialWithModels } from "../_util/TestimonialWithModels";
import { slugify } from "@/utils/TextUtils";

// Edit Testimonial Content 
export async function editTestimonialContent(id:number , content:string):Promise<TestimonialWithModels>{
   const result = await prisma.testimonial.update({
    where : {
      id : id
    },
    data : {
      content : content
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      service : true,
      customer : true,
      user : true
    },
   })

   return result as TestimonialWithModels;
}

// Adding Update Bisc Data 
export async function editTestimonialBasicData(id:number, data:FormData):Promise<TestimonialWithModels>{
  const title:string= data.get('title') as string;
  console.log("titl"+title);
  const ratingValue:string = data.get('rating') as string;
  const published:string = data.get('published') as string;
  const publish:boolean  = (published === 'yes'? true : false)
  const verifed:string = data.get('verified') as string;

  const verify:boolean  = (verifed === 'yes'? true : false)
  const result = await prisma.testimonial.update({
    where : {
      id :id
    },
    data :{
      title : title,
      rating : Number(ratingValue),
      published : publish,
      verified : verify
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      service : true,
      customer : true,
      user : true
    },
  })
  return result as TestimonialWithModels;
}

// Editing Testimonial Image 
export async function editTestimonialImage(testimonialId:number,formData:FormData):Promise<TestimonialWithModels | null>{
const imageFile = formData.get('image') as File;
let imagePath:string = ''; 
if(imageFile && imageFile.name){
  await fs.mkdir("public/testimonials/images", { recursive: true })
  imagePath = `/testimonials/images/${crypto.randomUUID()}-${imageFile.name}`;
  console.log("image path"+imagePath);
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await imageFile.arrayBuffer())
    )

    const updated = await prisma.testimonial.update({
      where : {
        id : testimonialId
      },
      data : {
        image : imagePath
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        service : true,
        customer : true,
        user : true
      },

    })
return updated as TestimonialWithModels;
}

return null;
}

// Removing Tag from Testimonial
export async function removeTesimonialCategory(testimonialId: number, name: string): Promise<TestimonialWithModels> {
  try {
    const nameSlug = slugify(name);
    const element = await prisma.category.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!element) {
      throw new Error('Element Not Exist');
    }
    const categoryId = element.id;
    await prisma.testimonialCategory.delete({
      where: { testimonialId_categoryId: { testimonialId, categoryId } }
    });
    
    const testimonial = await prisma.testimonial.findUnique({
      where: { id: testimonialId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        service : true,
        customer : true,
        user : true
      },
    });
  console.log("testimonial"+ testimonial?.tags.length);
    return testimonial as TestimonialWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Adding Category to  Testimonial
export async function addTestimonialCategory(id:number , ids:number[]):Promise<TestimonialWithModels | null >{
  try {
    const existingCats = await prisma.testimonialCategory.findMany({
      where: {
        testimonialId: id
      },
      select: {
        categoryId: true
      }
    });
    const existElement = existingCats.map(element => element.categoryId);
    const newIds = ids.filter(catlId => !existElement.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided IDs are already associated with the service');
    }
    const serviceExists = await prisma.testimonial.findUnique({
      where: { id: id }
    });
    if (!serviceExists) {
      throw new Error(`Testimonial with ID ${id} does not exist.`);
    }
    const exist = await prisma.category.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (exist.length !== ids.length) {
      throw new Error(`One or more element do not exist.`);
    }
    const element = await prisma.testimonial.update({
      where: {
        id: id
      },
      data: {
        categories: {
          create: newIds.map(catId => ({
            category: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        service : true,
        customer : true,
        user : true
      },
    });
    console.log('Tool updated successfully:', element);
    return element as TestimonialWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Removing Tag from Testimonial
export async function removeTesimonialTag(testimonialId: number, name: string): Promise<TestimonialWithModels> {
  try {
    const nameSlug = slugify(name);
    const element = await prisma.tag.findFirst({
      where: { slug: nameSlug },
      select: { id: true }
    });
    if (!element) {
      throw new Error('Tag Not Exist');
    }
    const tagId = element.id;
    await prisma.testimonialTag.delete({
      where: { testimonialId_tagId: { testimonialId, tagId } }
    });
    
    const testimonial = await prisma.testimonial.findUnique({
      where: { id: testimonialId },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        service : true,
        customer : true,
        user : true
      },
    });
  console.log("testimonial"+ testimonial?.tags.length);
    return testimonial as TestimonialWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Adding Tag to  Testimonial
export async function addTestimonialTag(id:number , ids:number[]):Promise<TestimonialWithModels | null >{
  try {
    const existingCats = await prisma.testimonialTag.findMany({
      where: {
        testimonialId: id
      },
      select: {
        tagId: true
      }
    });
    const existingToolIds = existingCats.map(cat => cat.tagId);
    const newIds = ids.filter(catlId => !existingToolIds.includes(catlId));

    if (newIds.length === 0) {
      throw new Error('All provided tool IDs are already associated with the service');
    }
    const serviceExists = await prisma.testimonial.findUnique({
      where: { id: id }
    });
    if (!serviceExists) {
      throw new Error(`Yestimonial with ID ${id} does not exist.`);
    }
    const toolsExist = await prisma.tag.findMany({
      where: {
        id: { in: ids }
      }
    });
    if (toolsExist.length !== ids.length) {
      throw new Error(`One or more category do not exist.`);
    }
    const element = await prisma.testimonial.update({
      where: {
        id: id
      },
      data: {
        tags: {
          create: newIds.map(catId => ({
            tag: { connect: { id: catId } }
          }))
        }
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        service : true,
        customer : true,
        user : true
      },
    });
    console.log('Tool updated successfully:', element);
    return element as TestimonialWithModels;
  } catch (error) {
    console.error('Error updating service with tools:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Remove Service from Testimonial
export async function removeTestimonialService(id:number, serviceId:number):Promise<number>{
  const result = await prisma.testimonial.update({
    where: {
      id: id,
      serviceId: serviceId
    },
    data :{
      serviceId : null
    }
  }); 
  return result.id;
}

// Adding Service to Testimonial by pass 'id' 'service'
export async function addTestimonialService(id:number , serviceId:number):Promise<TestimonialWithModels | null >{
  const service = await prisma.service.findUnique({
    where : {
      id : serviceId
    }
  })
  if (!service){throw new Error ("service noththere ")}
  const testimonials = await prisma.testimonial.update({
    where: {
      id: id
    },
    data: {
      serviceId : serviceId
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      service : true,
      customer : true,
      user : true
    }
  });

  return testimonials as TestimonialWithModels;
}


// Get Tesimonial Categories 
export async function getTestimonialCategories (testiId:number):Promise<TestimonialWithModels | null>{
  const result = await prisma.testimonial.findUnique({
    where: {
      id : testiId
    },
    include:{
      categories : true
    }
  });

  return result as TestimonialWithModels;
}

// Delete Tesyimonial/Testimonials  by passing 'ids'
export async function deleteTestimonial(ids:string[]): Promise<number> {
  try {
    const numberIds = ids.map(id => Number(id));
      const result = await prisma.testimonial.deleteMany({
        where: {
          id: {
            in: numberIds
          }
        }
      });
  return result.count;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


// Getting Testimonial with all models 
export async function getTestimonialWModels():Promise<TestimonialWithModels[] | null>{
  const elements = await prisma.testimonial.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      service : true,
      customer : true,
      user : true
    },
  });
  return elements as TestimonialWithModels[];

}




// Getting Testimonial with all models by id
export async function getTestimonialWModelsById(id:number):Promise<TestimonialWithModels | null>{
  const elements = await prisma.testimonial.findUnique({
    where: {
      id: id,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
      service : true,
      customer : true,
      user : true
    },
  });
  return elements as TestimonialWithModels;

}


// Creating New Testimonials 
export async function addTestimonial(data:FormData, categoryIds:string[],tagIds:string[]):Promise<Testimonial | null>{
    try {
    
        console.log("in add price --- ")
        const result = TestimonialSchema.safeParse(Object.fromEntries(data.entries()))
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error('User not authenticated');
        }
      
        const userId = session.user.id;
      
        if (result.success) {
          console.log("in success price --- ")
          const data = result.data; 
          let imagePath = '';
          let iconPath = '';
          
          if(data.image && data.image.name){
            await fs.mkdir("public/testimonials/images", { recursive: true })
            imagePath = `/testimonials/images/${crypto.randomUUID()}-${data.image.name}`
            await fs.writeFile(
              `public${imagePath}`,
              Buffer.from(await data.image.arrayBuffer())
              )
            }
            let verify = data.verified === 'yes' ? true : false;
            let published = data.published === 'yes' ? true : false;

            const tagsIds = tagIds.map(str => +str);
            const category_ids = categoryIds.map(str => +str);

             
      
            const newTestimonial = await prisma.testimonial.create({
              data: {
                title: data.title,
                content: data.content,
                rating: data.rating,
                verified: verify,
                published: published,
                image: imagePath,
                tags: {
                  create: tagsIds.map(tagId => ({
                    tag: { connect: { id: tagId } }
                  }))
                }
                
               
              },
            });  
              return newTestimonial;
            }
            return null;
      } catch (error) {
        throw error;
    }
}