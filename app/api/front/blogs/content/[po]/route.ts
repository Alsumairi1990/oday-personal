// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct

export async function GET(req: Request, { params }: { params: { po: string } }) {

  try {
    // Fetch services using the caching logic
    const elements = await getElements(params.po);
    if (elements) {
        return NextResponse.json(elements); 
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getElements(slug:string): Promise<string | null> {
  try {
    const element = await prisma.post.findUnique({
      where : {
        slug : "nextjs-performance-features"
      },
      select : {
        content: true
      }
    });
    return element?.content ?? null;
  } catch (error) {
    console.error('Error fetching market:', error);
    throw new Error('Failed to fetch market');
  } finally {
    await prisma.$disconnect(); 
  }
}
