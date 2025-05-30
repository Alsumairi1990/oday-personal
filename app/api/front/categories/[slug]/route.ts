// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';
import { ServiceForFront } from '@/app/[locale]/admin/service/utils/ServiceForFront';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    const category = await getServices(params.slug);
    if (category) {
        return NextResponse.json(category); 
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getServices(slug:string): Promise<CategoryForFront | null> {
  try {
    

    const categories = await prisma.category.findUnique({
        where : {
          slug : slug
        },
        include: {
          tools: {
            select: {
              name: true,
              nameAr: true,
              icon: true,
            }
          },
          industries : {
            select: {
              name: true,
              nameAr: true,
              icon: true,
            }
          },
          projects : {
            select: {
              name: true,
              icon: true,
            }
          },
          testimonials: {
            include: {
              testimonial: {
                select: {
                  title: true,
                  titleAr: true,
                  image: true,
                },
              },
            },
            take: 8,
          },
          services: {
            include: {
              service: {
                select: {
                  name: true,
                  nameAr: true,
                  icon: true,
                },
              },
            },
            take: 8,
          },
          works: {
            include: {
              service: true, 
            },
          },
          phases : {
            include : {
              steps : true
            }
          },
          products: true,
          clients : {
            select : {
              companyName: true,
              image : true
            },
            take  : 8
          }
        },
      });

    return categories as CategoryForFront;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
