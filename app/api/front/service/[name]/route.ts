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
    
    const start = performance.now();
    const [service1, service2] = await Promise.all([
    prisma.service.findFirst({
      where: {
        name_slug: name,
      },
      include: {
        phases: {
          select: {
            id: true,
            name: true,
            nameAr: true,
            description: true,
            descriptionAr: true,
            icon: true,
            phaseType: true,
            steps: {
              select: {
                id: true,
                name: true,
                nameAr: true,
              },
            },
          },
        },
        products: {
          select: {
            id: true,
            name: true,
            nameAr: true,
            image: true,
          },
        },
        features: {
          select: {
            id: true,
            name: true,
            title: true,
            titleAr: true,
            desc: true,
            descAr: true,
            image: true,
          },
          take: 4,
        },
        testimonials: {
          select: {
            id: true,
            title: true,
            titleAr: true,
            content: true,
            contentAr: true,
            image: true,
          },
          take: 3,
        },
        packages: {
          select: {
            id: true,
            name: true,
            nameAr: true,
            description: true,
            descriptionAr: true,
            image: true,
            icon: true,
            price: true,
            features: {
              select: {
                feature: true,
              },
              orderBy: {
                id: "asc",
              },
              take: 3,
            },
          },
          take: 3,
        },
      },
    }),
    
     prisma.service.findFirst({
      where: {
        name_slug: name,
      },
      include: {
        tools: {
          include: {
            tool: {
              select: {
                name: true,
                nameAr: true,
                icon: true,
              },
            },          
          },
          take: 8,
        },
        works: {
          select: {
            id: true,
            title: true,
            titleAr: true,
            image: true,
            location: {
              select: {
                country: true,
                countryAr: true,
              },
            },
          },
        },
        clients: {
          select: {
            id: true,
            companyName: true,
            image: true,
          },
        },
        industries: true,
        plans: true,
        offers: {
          select: {
            title: true,
            titleAr: true,
            image: true,
            icon: true,
            id: true,
          },
        },
      },
    })
  ]);
   
    const combinedService = { ...service1, ...service2 } as ServiceForFront;

    return combinedService as ServiceForFront;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
