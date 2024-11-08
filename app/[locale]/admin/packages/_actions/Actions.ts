"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"
import prisma from "@/utils/prisma";
import { slugify } from "@/utils/TextUtils";
import { Package, PackageFeature, PlanCategory } from "@prisma/client";
import { PackageSchema } from "../_utils/PackageSchema";
import { PackageFeatureSchema } from "../_utils/PackageFeatureSchema";

export async function getPlanCategories(): Promise<PlanCategory[]> {
  try {
    const elements = await prisma.planCategory.findMany({
    });
    return elements;
  } catch (error) {
    throw error;
  }
}

export async function addFeature(packageName:string,featureID:string,isIncluded:string): Promise<number> {
  try {
    const packageData  = await prisma.package.findUnique({
      where : {
        slug : slugify(packageName)
      }
     
    })
    const feature = await prisma.packageFeature.findUnique({
      where : {
        id : parseInt(featureID)
      }
    })
    if (!packageData){throw new Error('no package data')}
    if (!feature){throw new Error('no package feature data')}
    const packageId = packageData.id;
    const featureId = feature.id;
    const included = isIncluded === 'on' ? true : false;
    const featur =  await prisma.packageFeatureLink.upsert({
      where: {
        packageId_featureId: {
          packageId,
          featureId,
        },
      },
      create: {
        packageId,
        featureId,
        included,
      },
      update: {
        included,
      },
    });
    
    return featur.featureId;
  } catch (error) {
    throw error;
  }
}



export async function getPackageFeatures(): Promise<PackageFeature[]> {
  try {
    const elements = await prisma.packageFeature.findMany({
    });
    return elements;
  } catch (error) {
    throw error;
  }
}


export async function getPackages(): Promise<Package[]> {
  try {
    const elements = await prisma.package.findMany({
    });
    return elements;
  } catch (error) {
    throw error;
  }
  
}


export async function addPackageFeature(data: FormData,name:string): Promise<number> {
  try {
    // Pars the offer data from the form
    const result = PackageFeatureSchema.safeParse(Object.fromEntries(data.entries()));
    if (result.success) {
      const data = result.data;
     const packageData = await prisma.package.findUnique({
      where : {
        slug : slugify(name)
      }
     })
     if(!packageData){ throw new Error('package not there')}
     const basic = await prisma.packageFeature.create({
          data: {
            name: data.name,
            nameAr: data.nameAr,
            value : data.value,
            valueAr : data.valueAr,
            description : data.description,
            descriptionAr : data.descriptionAr,

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
// creating package info
export async function addPackage(data: FormData, categories: string[]): Promise<number> {
    try {
      // Parse the offer data from the form
      const result = PackageSchema.safeParse(Object.fromEntries(data.entries()));
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
          await fs.mkdir("public/package-media/images", { recursive: true });
          imagePath = `/package-media/images/${crypto.randomUUID()}-${data.image.name.replace(/\s+/g, '').replace(/[()]/g, '') }`;
          const buffer = Buffer.from(await data.image.arrayBuffer());
          await fs.writeFile(`public${imagePath}`, buffer as unknown as Uint8Array);
        }
  
     
        if (data.icon && data.icon.name) {
          await fs.mkdir("public/package-media/icons", { recursive: true });
          iconPath = `/package-media/icons/${crypto.randomUUID()}-${data.icon.name.replace(/\s+/g, '').replace(/[()]/g, '') }`;
          const buffer = Buffer.from(await data.icon.arrayBuffer());
          await fs.writeFile(`public${iconPath}`, buffer as unknown as Uint8Array);
        }
  
        
  
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
        const basic = await prisma.package.create({
          data: {
            name: data.name,
            nameAr: data.nameAr,
            slug : slugify(data.name),
            description: data.description,
            descriptionAr: data.descriptionAr,
            price : data.price,
            image: imagePath,
            isPopular : data.isPopular === 'yes' ? true : false,
            icon: iconPath,
            userId : userId
          },
        });
  
        // Fetch current associations for services and locations (if any exist)
        const existingOffer = await prisma.package.findUnique({
          where: { id: basic.id },
          select: {
            categories: { select: { id: true } }, // Fetch already associated locations
          },
        });
  
        const existingLocationIds = existingOffer?.categories.map(category => category.id) || [];
        // Filter out services and locations that are already associated
        const newLocationsToAssociate = locationRecords.filter(category => !existingLocationIds.includes(category.id));
  
        // Update the offer to connect the new services and locations (if any)
        if (newLocationsToAssociate.length > 0) {
          await prisma.package.update({
            where: { id: basic.id },
            data: {
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
  
