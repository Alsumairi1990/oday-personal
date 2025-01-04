// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanCatPackForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCatPackForFront';
import { Tool } from '@prisma/client';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    const elements = await getElement(params.slug);
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElement(slug:string): Promise<Tool | null> {
  try {
    const element = await prisma.tool.findUnique({
        where: {
          slug : slug
        },
        
      });
    
        
    return element ;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}