// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Plan } from '@prisma/client';

export async function GET(req: Request, { params }: { params: { slug: string; no: string  } }) {
  try {
    const elements = await getElements(params.slug,parseInt(params.no));
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElements(slug:string,no:number): Promise<Plan[] | null> {
  try {
    const elements = await prisma.plan.findMany({
      take : no,
      where: {
        categories: {
          some: {
            slug: slug,
          },
        },
      },
    });
    return elements;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}