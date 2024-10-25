// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { ProductForFront } from '@/app/[locale]/admin/products/_utils/ProductForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const product = await getProduct(params.slug);
    console.log("------------------"+product?.name)
    if (product) {
        return NextResponse.json(product); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getProduct(slug:string): Promise<ProductForFront | null> {
  try {
    const product = await prisma.product.findUnique({
      
      where: {
        slug : slug
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

    return product as ProductForFront;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
