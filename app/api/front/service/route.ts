// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { getServicesFromCache, setServicesToCache } from '@/app/[locale]/admin/common/cache/ServicesCach';
import { Service } from '@prisma/client';

export async function GET() {
  console.log('ServiceAPI called'); // Log to check if this endpoint is hit

  try {
    // Fetch services using the caching logic
    const services = await getServices();
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Refactored getServices function to use in the API route
async function getServices(): Promise<Service[]> {
  try {
    

    // Fetch services from the database using Prisma
    const services = await prisma.service.findMany();
    setServicesToCache(services);
    console.log('Setting services to cache');

    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
