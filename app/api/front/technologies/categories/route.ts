// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Category, Tool } from '@prisma/client';
import { CategoryWithTools } from '@/app/[locale]/admin/category/util/CategoryWithTools';

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
async function getElements(): Promise<CategoryWithTools[] | null> {
  try {
    const elements = await prisma.category.findMany({
        where: {
          tools: {
            some: {}, 
          },
        },
        include: {
          tools: true, 
        },
      });
    return elements as CategoryWithTools[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}