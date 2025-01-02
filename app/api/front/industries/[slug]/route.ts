// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Industry, Market, Service } from '@prisma/client';
import { IndustryForFront } from '@/app/[locale]/admin/industries/_utils/IndustryForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const element = await getData(params.slug);
    if (element) {
        return NextResponse.json(element); 
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal  Error' }, { status: 500 });
  }
}

async function getData(name:string): Promise<IndustryForFront | null> {
  try {
    const element = await prisma.industry.findFirst({
      where: {
        slug: name 
      },
      include: {
        services: true,
        works : true,
        posts : true
      },

    });
    return element as IndustryForFront ;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}
