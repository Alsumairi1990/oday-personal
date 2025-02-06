// app/api/front/menu/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path to prisma is correct
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';

// Function to get admin menu elements 
async function getMenusElementse2(): Promise<Record<number, MenuWithAllModels[]>> {
  try {
    // Fetch data from the database
    console.log("Fetching data from the database...");
    const menuWithElements = await prisma.adminMenu.findMany({
      where: { menuType: 'profile' },
      include: {
        menuParent: true,
        elements: {
          include: {
            parent: true,
            subElements: {
              include: {
                parent: true,
                subElements: true,
              },
            },
          },
        },
        user: true,
      },
      orderBy: { id: 'desc' },
    });
    
    // Group data by parent ID
    const groupedByParentId = menuWithElements.reduce((acc, menu) => {
      const parentId = menu.menuParent?.id;
      if (parentId !== null && parentId !== undefined) {
        if (!acc[parentId]) acc[parentId] = [];
        acc[parentId].push(menu as MenuWithAllModels);
      }
      return acc;
    }, {} as Record<number, MenuWithAllModels[]>);

    return groupedByParentId;
  } catch (error) {
    console.error('Error fetching menu elements:', error);
    throw new Error('Failed to fetch menu elements');
  }
}

// The actual API route handler
export async function GET() {
  try {
    const menus = await getMenusElementse2();
    return NextResponse.json(menus);
  } catch (error) {
    console.error('Error in GET menu API:', error);
    return NextResponse.error();
  }
}
