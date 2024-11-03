// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanForFront } from '@/app/[locale]/admin/plans/_utils/PlanForFront';
import { PlanCategoryForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront';

export async function GET() {

  try {
    const elements = await getElements();
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function getElements(): Promise<PlanCategoryForFront[] | null> {
  try {
    const elements = await prisma.planCategory.findMany({
        include: {
         plans : true,
         _count: {
          select: {
            plans: true, 
          },
        },
         },
      });
    return elements as PlanCategoryForFront[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}
