
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { WorkSingleData } from '@/app/[locale]/admin/works/utils/WorkSingleData';

export async function GET(req: Request, { params }: { params: { slug: string } }) {

  try {
    // Fetch services using the caching logic
    const work = await getWorks(params.slug);
    if (work) {
        return NextResponse.json(work); // Return a single object
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching work:', error);
    return NextResponse.json({ error: 'Internal work Error' }, { status: 500 });
  }
}

async function getWorks(industryName: string): Promise<WorkSingleData[]> {
    try {
      const workData = await prisma.work.findMany({
        where: {
          Industry: {
            some: {
              slug: industryName, // Match works associated with the specified industry name
            },
          },
        },
        include: {
          categories: {
            include: {
              category: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          tools: {
            include: {
              tool: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          service: {
            select: {
              name: true,
              nameAr: true,
            },
          },
          clients: true, // Assumes Client is directly related to Work
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                  nameAr: true,
                },
              },
            },
          },
          location: {
            select: {
              country: true,
              countryAr: true,
              city: true,
              cityAr: true,
            },
          },
          Industry: {
            select: {
              name: true,
              nameAr: true,
            },
          },
        },
      });
  
      return workData as WorkSingleData[]; // Returns an array of work objects that meet the criteria
    } catch (error) {
      console.error('Error fetching works:', error);
      throw new Error('Failed to fetch works');
    } finally {
      await prisma.$disconnect(); // Ensure Prisma disconnects when done
    }
  }
  
