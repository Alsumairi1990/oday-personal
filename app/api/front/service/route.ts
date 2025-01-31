// app/api/front/serviceapi/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma'; // Ensure the path is correct
import { Service } from '@prisma/client';

export async function GET() {
  console.log('ServiceAPI called'); // Log to check if this endpoint is hit

  try {
    const services = await getServices();
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function getServices(): Promise<Service[]> {
  try {
    const services = await prisma.service.findMany();
    return services;
  } catch (error) {
    throw new Error('Failed to fetch services');
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects when done
  }
}
