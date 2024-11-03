"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { PlanSchema } from "../_utils/PlanSchema";
import { slugify } from "@/utils/TextUtils";
import { PlanCategorySchema } from "../category/_utils/PlanCategorySchema";
import { PlanCategory } from "@prisma/client";

export async function getPlanCategories(): Promise<PlanCategory[]> {
  try {
    const elements = await prisma.planCategory.findMany({
    });
    return elements;
  } catch (error) {
    throw error;
  }
  
}


export async function addPlanCategory(data: FormData): Promise<number> {
  try {
    // Parse the offer data from the form
    const result = PlanCategorySchema.safeParse(Object.fromEntries(data.entries()));
    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error('User not authenticated');
    }

    const userId = session.user.id;

    if (result.success) {
      const data = result.data;

      let imagePath = '';
      let iconPath = '';

      // Handle image upload
      if (data.image && data.image.name) {
        await fs.mkdir("public/offers/images", { recursive: true });
        imagePath = `/offers/images/${crypto.randomUUID()}-${data.image.name}`;
        const buffer = Buffer.from(await data.image.arrayBuffer());
        await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
      }

      // Handle icon upload
      if (data.icon && data.icon.name) {
        await fs.mkdir("public/offers/icons", { recursive: true });
        iconPath = `/offers/icons/${crypto.randomUUID()}-${data.icon.name}`;
        const buffer = Buffer.from(await data.icon.arrayBuffer());
        await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
      }

     const basic = await prisma.planCategory.create({
          data: {
            name: data.name,
            nameAr: data.nameAr,
            slug : slugify(data.name),
            title : data.title,
            titleAr :data.titleAr,
            subTitle : data.subTitle,
            subTitleAr : data.subTitleAr,
            description : data.description,
            descriptionAr : data.descriptionAr,
            icon : iconPath,
            image : imagePath,
            userId : userId

          }
        })
          return basic.id;
    } else {
      console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
      throw new Error('Schema validation failed');
    }
  } catch (error) {
    console.log("[addOffer] " + error);
    throw error;
  }
}
// creating offer info
export async function addPlan(data: FormData, categories: string[], services: string[]): Promise<number> {
    try {
      // Parse the offer data from the form
      const result = PlanSchema.safeParse(Object.fromEntries(data.entries()));
      const session = await getServerSession(authOptions);
  
      if (!session) {
        throw new Error('User not authenticated');
      }
  
      const userId = session.user.id;
  
      if (result.success) {
        const data = result.data;
  
        let imagePath = '';
        let iconPath = '';
  
        // Handle image upload
        if (data.image && data.image.name) {
          await fs.mkdir("public/offers/images", { recursive: true });
          imagePath = `/offers/images/${crypto.randomUUID()}-${data.image.name}`;
          const buffer = Buffer.from(await data.image.arrayBuffer());
          await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        }
  
        // Handle icon upload
        if (data.icon && data.icon.name) {
          await fs.mkdir("public/offers/icons", { recursive: true });
          iconPath = `/offers/icons/${crypto.randomUUID()}-${data.icon.name}`;
          const buffer = Buffer.from(await data.icon.arrayBuffer());
          await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
        }
  
        // Fetch the IDs of the services by their names
        const serviceRecords = await prisma.service.findMany({
          where: {
            name: {
              in: services, // Find all services whose name is in the provided array
            },
          },
          select: {
            id: true, // Only select the id field
          },
        });
  
        // Fetch the IDs of the locations by their names
        const locationRecords = await prisma.planCategory.findMany({
          where: {
            name: {
              in: categories, // Find all locations whose name is in the provided array
            },
          },
          select: {
            id: true, // Only select the id field
          },
        });
  
        // Create the offer first
        const basic = await prisma.plan.create({
          data: {
            name: data.name,
            nameAr: data.nameAr,
            slug : slugify(data.name),
            description: data.description,
            descriptionAr: data.descriptionAr,
            monthlyPrice: data.monthlyPrice,
            semiAnnualPrice: data.semiAnnualPrice,
            yearlyPrice: data.yearlyPrice,
            features: data.features,
            featuresAr: data.featuresAr,limits: data.limits,
            limitsAr: data.limitsAr,
            support: data.support,
            supportAr: data.supportAr,
            duration: data.duration,
            image: imagePath,
            icon: iconPath,
            userId : userId
          },
        });
  
        // Fetch current associations for services and locations (if any exist)
        const existingOffer = await prisma.plan.findUnique({
          where: { id: basic.id },
          select: {
            services: { select: { id: true } }, // Fetch already associated services
            categories: { select: { id: true } }, // Fetch already associated locations
          },
        });
  
        const existingServiceIds = existingOffer?.services.map(service => service.id) || [];
        const existingLocationIds = existingOffer?.categories.map(category => category.id) || [];
  
        // Filter out services and locations that are already associated
        const newServicesToAssociate = serviceRecords.filter(service => !existingServiceIds.includes(service.id));
        const newLocationsToAssociate = locationRecords.filter(category => !existingLocationIds.includes(category.id));
  
        // Update the offer to connect the new services and locations (if any)
        if (newServicesToAssociate.length > 0 || newLocationsToAssociate.length > 0) {
          await prisma.plan.update({
            where: { id: basic.id },
            data: {
              services: {
                connect: newServicesToAssociate.map(service => ({ id: service.id })),
              },
              categories: {
                connect: newLocationsToAssociate.map(category => ({ id: category.id })),
              },
            },
          });
        }
  
        return basic.id;
  
      } else {
        console.log('Validation errors:', result.error.format()); // Log the specific schema validation errors
        throw new Error('Schema validation failed');
      }
    } catch (error) {
      console.log("[addOffer] " + error);
      throw error;
    }
  }
  
