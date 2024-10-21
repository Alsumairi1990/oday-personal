// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Market, Service } from '@prisma/client';
import { MarketWithModels } from '@/app/[locale]/admin/market/_utils/MarketWithModels';

export async function GET() {

  try {
    // Fetch services using the caching logic
    const element = await getMarkets();
    if (element) {
        return NextResponse.json(element); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getMarkets(): Promise<MarketWithModels[] | null> {
  try {
    const marketsWithPages = await prisma.market.findMany({
      include: {
        marketPages: {
          include: {
            mrPage: true, // Include the related MrPage data
          },
        },
      },
    });
    
    return marketsWithPages as MarketWithModels[];
  } catch (error) {
    console.error('Error fetching market:', error);
    throw new Error('Failed to fetch market');
  } finally {
    await prisma.$disconnect(); 
  }
}
