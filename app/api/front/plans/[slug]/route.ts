// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { ProductForFront } from '@/app/[locale]/admin/products/_utils/ProductForFront';
import { PlanForFront } from '@/app/[locale]/admin/plans/_utils/PlanForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    const element = await getElement(params.slug);
    console.log("------------------"+element)
    if (element) {
        return NextResponse.json(element); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function getElement(slug:string): Promise<PlanForFront | null> {
  try {
    const elements = await prisma.plan.findUnique({
      
      where: {
        slug : slug
      }, 
        include: {
          categories: true,
          services: true
        },
      });
      
    console.log('Setting services to cache');

    return elements as PlanForFront;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}
