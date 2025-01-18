// app/api/front/categories/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET() {
  try {
    const elements = await prisma.explore.findMany({
    });
    
    return NextResponse.json(elements);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.error(); // Return error response
  }
}
