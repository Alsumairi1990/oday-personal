// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';
import { ServiceForFront } from '@/app/[locale]/admin/service/utils/ServiceForFront';

export async function GET(req: Request, { params }: { params: { name: string } }) {

  try {
    // Fetch services using the caching logic
    const service = await getServices(params.name);
    if (service) {
        return NextResponse.json(service); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getServices(name:string): Promise<ServiceForFront | null> {
  try {
    

    const service = await prisma.service.findFirst({
        where : {
          name_slug : name
        },
        include: {
          tools: {
            include: {
              tool: true, // Include related Service details
            },
            take : 8
          },
          // tags: {
          //   include: {
          //     tag: true, // Include related Service details
          //   },
          // },
          // categories: {
          //   include: {
          //     category: true, // Include related Service details
          //   },
          // },
          works: true,
          phases : {
            include : {
              steps : true
            }
          },
          products: true,
          clients : {
            select : {
              companyName: true,
              image : true
            }
          },
          // industries : true,
          features : true,
          testimonials: {
            take: 3, 
          },
          // plans  : true,
          offers : true,
          packages: {
            include: {
              features: {
                include: {
                  feature: true, 
                },
                orderBy: {
                  id: 'asc', 
                },
              },
            },
          },
        },
      });
    console.log('Setting services to cache');

    return service as ServiceForFront;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
