// app/api/blog/latest/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    // Fetch the latest 2 posts
    const latestPosts = await prisma.testimonial.findMany({
      take: 3, // Limit to latest 2 posts
    });

    return NextResponse.json(latestPosts);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
