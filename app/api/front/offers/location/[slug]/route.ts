// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Offer } from '@prisma/client';


export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    const work = await getOffers(params.slug);
    if (work) {
        return NextResponse.json(work); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching work:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getOffers(name:string): Promise<Offer[] | null> {
  try {
    const elements = await prisma.offer.findMany({
    });
    return elements;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
