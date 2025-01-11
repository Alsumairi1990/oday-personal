// app/api/front/categories/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      take: 6, // Retrieve the first 10 categories
      distinct: ['id'], // Ensure no duplicates based on the category ID
      include: {
        services: true, // Include related services
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.error(); // Return error response
  }
}
