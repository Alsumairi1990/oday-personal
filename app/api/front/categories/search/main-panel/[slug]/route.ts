import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { Category } from '@prisma/client';


export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    let categories:Category[] = [];
    if(params.slug && params.slug === 'product'){
        categories = await  getProductCategories();
    } else if (params.slug && params.slug === 'service')
       categories = await getServiceCategories();
    if (categories) {
        return NextResponse.json(categories); 
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


async function getProductCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.category.findMany({
        where: {
          products: {
            some: {},
          },
        },
        distinct: ['id'],
      });
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch services');
  }
}

async function getServiceCategories(): Promise<Category[]> {
    try {
      const categories = await prisma.category.findMany({
          where: {
            services: {
              some: {},
            },
          },
          distinct: ['id'],
        });
      return categories
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch services');
    }
  }
