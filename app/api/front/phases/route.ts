// app/api/blog/latest/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    const elements = await prisma.phase.findMany({
        where : {
          phaseType : 'company'
        },
        include : {
          steps : true
        }
      })
    return NextResponse.json(elements);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
