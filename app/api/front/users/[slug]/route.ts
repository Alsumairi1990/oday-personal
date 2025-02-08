import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; 
import { UserForFront } from '@/app/[locale]/user/_utils/UserForFront';
export async function GET(req: Request, { params }: { params: { slug: string , no : string} }) {
  try {
    const elements = await getElements(params.slug);
    if (elements) {
        return NextResponse.json(elements);
      } else {
        return NextResponse.json({ error: 'No data found' }, { status: 404 });
      }  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
async function getElements(slug:string): Promise<UserForFront | null> {
  try {

      const element =  await prisma.user.findUnique({
        where: {email: slug },
        include: {
          employeeProfile: {
            include: {
              socialNetwork: true, // Include related social network
              skills: true,        // Include employee skills
              teams: true,         // Include team associations
              departmentHeadOf: true, // Include departments the user is head of
            },
          },
        },
      });
    return element as UserForFront ;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  } finally {
    await prisma.$disconnect(); 
  }
}