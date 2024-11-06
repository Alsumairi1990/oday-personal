// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanForFront } from '@/app/[locale]/admin/plans/_utils/PlanForFront';

export async function GET(req: Request, { params }: { params: { slug: string; name: string  } }) {
  try {
    const elements = await getElements(params.slug,params.name);
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElements(slug:string,name:string): Promise<PlanForFront | null> {
  try {
    const element = await prisma.plan.findUnique({
      where: {
        slug : name,
        categories: {
          some: {
            slug: slug,
          },
        },
      },
    });
    return element as PlanForFront;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}