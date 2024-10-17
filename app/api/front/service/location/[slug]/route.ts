// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';
import { ServiceForFront } from '@/app/[locale]/admin/service/utils/ServiceForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const services = await getServices(params.slug);
    if (services) {
        return NextResponse.json(services); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getServices(name:string): Promise<ServiceForFront[] | null> {
  try {
    

    const services = await prisma.service.findMany({
        where: {
          markets: {
            some: {
              slug: name, // filter by location name
            },
          },
        },
        include: {
          tools: {
            include: {
              tool: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
          categories: {
            include: {
              category: true,
            },
          },
          works: true,
          phases: {
            include: {
              steps: true,
            },
          },
          products: true,
          clients: {
            select: {
              companyName: true,
              image: true,
            },
          },
          industries: true,
          testimonials: true,
        },
      });
      
      
    console.log('Setting services to cache');

    return services as ServiceForFront[];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
