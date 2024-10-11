// app/api/front/categories/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      distinct: ['id'], // Ensure no duplicates based on the category ID
      include: {
        services: true, // Include related services
        _count: {
          select: {
            services: true, // Count the number of services for each category
          },
        },
      },
    });
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.error(); // Return error response
  }
}
