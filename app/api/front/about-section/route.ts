// app/api/blog/latest/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    const section = await prisma.aboutUsSection.findFirst({

      })
    return NextResponse.json(section);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
