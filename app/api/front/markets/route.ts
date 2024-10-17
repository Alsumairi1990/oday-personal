// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Market, Service } from '@prisma/client';

export async function GET() {

  try {
    // Fetch services using the caching logic
    const element = await getServices();
    if (element) {
        return NextResponse.json(element); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getServices(): Promise<Market | null> {
  try {
    const element = await prisma.market.findFirst({
     
    });
    return element ;
  } catch (error) {
    console.error('Error fetching market:', error);
    throw new Error('Failed to fetch market');
  } finally {
    await prisma.$disconnect(); 
  }
}
