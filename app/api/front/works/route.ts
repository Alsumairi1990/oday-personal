// app/api/blog/latest/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    const results = await prisma.work.findMany({
        
        include: {
          categories: {
            include: {
              category: {
                select: {
                  name: true, // Replace 'name' with the actual field in the Category model if it's different
                  nameAr : true
                },
              },
            },
          },
          services: {
            select: {
              name: true, // This fetches the 'name' field from the Service model
              nameAr : true
            },
          },
        },
      });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
