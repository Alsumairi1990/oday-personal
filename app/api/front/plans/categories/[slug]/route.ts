// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanCategoryForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    const elements = await getElements(params.slug);
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElements(slug:string): Promise<PlanCategoryForFront | null> {
  try {
    const elements = await prisma.planCategory.findUnique({
        where : {
            slug : slug
        },
        include: {
         plans : true
         },
      });
    return elements as PlanCategoryForFront;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}