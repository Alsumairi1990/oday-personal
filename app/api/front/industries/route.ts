import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to your Prisma instance is correct

export async function GET() {
  try {
    const industries = await prisma.industry.findMany({
    });

    return NextResponse.json(industries);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return NextResponse.error(); // Handles internal server error
  }
}
