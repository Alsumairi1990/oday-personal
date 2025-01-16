// app/api/front/categories/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
        where: {
          services: {
            some: {}, // Ensures the category has at least one associated service
          },
        },
        distinct: ['id'], // Ensure distinct categories by ID
        select: {
          name: true,
          nameAr : true 
        },
      });
      
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.error(); // Return error response
  }
}
