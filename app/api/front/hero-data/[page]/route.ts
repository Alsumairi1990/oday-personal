// In your /api/front/hero-data/[page]/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET(req: Request, { params }: { params: { page: string } }) {
  try {
    // Fetch a single record based on 'page'
    const heroData = await prisma.heroSection.findFirst({
      where: {
        pageName: params.page, // Use the page parameter to filter the data
      },
    });

    if (heroData) {
      return NextResponse.json(heroData); // Return a single object
    } else {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return NextResponse.error(); // Handle internal server error
  }
}
