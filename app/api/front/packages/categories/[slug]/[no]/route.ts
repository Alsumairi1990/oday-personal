// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanCatPackForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCatPackForFront';

export async function GET(req: Request, { params }: { params: { slug: string , no : string} }) {
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
async function getElements(slug:string,no:number): Promise<PlanCatPackForFront | null> {
  try {
  
    // const elements = await prisma.planCategory.findUnique({
    //   where: {
    //     slug: slug,
    //   },
    //   include: {
    //     packages: {
    //       include: {
    //         features: true, 
    //       },
    //       take : no
    //     },
  //   },
    // });
    const elements = await prisma.planCategory.findUnique({
      where: {
        slug: slug,
      },
      include: {
        packages: {
          include: {
            features: {
              include: {
                feature: true, // Include the related PackageFeature data
              },
              orderBy: {
                id: 'asc', 
              },
            },
          },
          
          take: no,
        },
        
      },
    });
    
    // TypeScript will now know how to handle the query result as PlanCatPackForFront
    
    return elements as PlanCatPackForFront;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}