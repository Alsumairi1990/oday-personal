// app/api/blog/latest/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    // Fetch the latest 2 posts
    const features = await prisma.serviceFeature.findMany({
    });
    if (features) {
        return NextResponse.json(features); 
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }

  } catch (error) {
    console.error('Error fetching features:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
