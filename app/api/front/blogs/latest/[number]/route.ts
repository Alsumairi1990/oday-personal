// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Market, Post, Service } from '@prisma/client';

export async function GET(req: Request, { params }: { params: { number: string } }) {

  try {
    // Fetch services using the caching logic
    const elements = await getElements(parseInt(params.number));
    if (elements) {
        return NextResponse.json(elements); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getElements(number:number): Promise<Post[] | null> {
  try {
    const elements = await prisma.post.findMany({
      take : number,
      include : {
        categories : true
      }
    });

    return elements ;
  } catch (error) {
    console.error('Error fetching market:', error);
    throw new Error('Failed to fetch market');
  } finally {
    await prisma.$disconnect(); 
  }
}
