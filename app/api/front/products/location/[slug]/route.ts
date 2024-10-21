// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';
import { ServiceForFront } from '@/app/[locale]/admin/service/utils/ServiceForFront';
import { ProductForFront } from '@/app/[locale]/admin/products/_utils/ProductForFront';

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
async function getServices(name:string): Promise<ProductForFront[] | null> {
  try {
    const products = await prisma.product.findMany({
        where: {
          locations: {
            some: {
              country: name, // Filter locations where country is 'Qatar'
            },
          },
        },
        include: {
          prices: true,
          categories: true,
          tags: true,
          media: true,
          services: true,
          vendor: true,
          locations: true, // Include related Location data
        },
      });
      
    console.log('Setting services to cache');

    return products as ProductForFront[];
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
