// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';
import { ServiceForFront } from '@/app/[locale]/admin/service/utils/ServiceForFront';
import { WorkSingleData } from '@/app/[locale]/admin/works/utils/WorkSingleData';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const work = await getWorks(params.slug);
    if (work) {
        return NextResponse.json(work); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching work:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getWorks(name:string): Promise<WorkSingleData[] | null> {
  try {
    

    const workData = await prisma.work.findMany({
        where: {
          location: {
            slug: name, 
          },
        },
        include: {
          categories: {
            include: {
              category: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          tools: {
            include: {
              tool: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          service: {
            select: {
              name: true,
              nameAr: true,
            },
          },
          clients: true, // Assumes Client is directly related to Work
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          location: {
            select: {
              country: true,
              countryAr: true,
              city: true,
              cityAr: true,
            },
          },
        },
      });
      
    

    return workData as WorkSingleData[];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
