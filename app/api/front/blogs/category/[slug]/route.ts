// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Market, Post, PostCategory, Service } from '@prisma/client';
import { PostCategoryFront } from '@/app/[locale]/admin/blogs/_utils/PostCategoryFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const elements = await getElements(params.slug);
    if (elements) {
        return NextResponse.json(elements); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getElements(slug:string): Promise<PostCategoryFront | null> {
  try {
    const elements = await prisma.postCategory.findUnique({
      where : {
        slug : slug
      },
      include : {
        pots : true
      }
    });
    return elements as PostCategoryFront;
  } catch (error) {
    console.error('Error fetching market:', error);
    throw new Error('Failed to fetch market');
  } finally {
    await prisma.$disconnect(); 
  }
}
