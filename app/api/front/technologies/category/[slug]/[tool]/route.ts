// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { PlanCatPackForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCatPackForFront';
import { Tool } from '@prisma/client';
import { ToolForFront } from '@/app/[locale]/admin/tools/utils/ToolsForFront';
import { ToolSingle } from '@/app/[locale]/admin/tools/utils/ToolSingle';

export async function GET(req: Request, { params }: { params: { slug: string, tool:string } }) {
  try {
    const elements = await getElement(params.slug,params.tool);
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElement(slug:string,tool:string): Promise<ToolSingle | null> {
  try {
    const element = await prisma.tool.findFirst({
      where: {
        AND: [
          { slug: tool }, // Condition for the tool's slug
          {
            categories: {
              some: {
                slug: slug, // Condition for the category's slug
              },
            },
          },
        ],
      },
        include: {  
         categories: true,
          services : {
            include : {
                service : true
            }
          },
          works : {
            include : {
                work : true
            }
          },
          posts : true,
          Feature: true 
            }
        
      });
    
        
    return element as ToolSingle ;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}